import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/loginform';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {
    this.cartItems.next(this.loadCart());
  }

  private loadCart(): CartItem[] {
    const cartData = localStorage.getItem('cartItems');
    return cartData ? JSON.parse(cartData) : [];
  }

  private saveCart() {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(this.cartItems.getValue())
    );
  }

  addToCart(item: CartItem) {
    const items = this.cartItems.getValue();
    const existingItem = items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.push({ ...item });
    }

    this.cartItems.next(items);
    this.saveCart();
  }

  removeFromCart(itemId: number) {
    const items = this.cartItems
      .getValue()
      .filter((item) => item.id !== itemId);
    this.cartItems.next(items);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartItems() {
    return this.cartItems.getValue();
  }

  getTotalItemCount(): number {
    return this.cartItems
      .getValue()
      .reduce((count, item) => count + item.quantity, 0);
  }

  getSubtotal(): number {
    return this.cartItems
      .getValue()
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getShippingFee(): number {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) {
      return 0;
    } else if (subtotal < 100) {
      return 5;
    } else if (subtotal >= 100 && subtotal <= 200) {
      return 10;
    } else {
      return 15;
    }
  }

  getTax(): number {
    const subtotal = this.getSubtotal();
    return subtotal * 0.05; // Assuming a 5% tax rate
  }

  getTotal(): number {
    return this.getSubtotal() + this.getShippingFee() + this.getTax();
  }
  clearLocalStorageCart() {
    localStorage.removeItem('cartItems');
  }
}
