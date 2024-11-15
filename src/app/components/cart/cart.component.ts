import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../interfaces/loginform';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  get subtotal(): number {
    return this.cartService.getSubtotal();
  }

  get shippingFee(): number {
    return this.cartService.getShippingFee();
  }

  get tax(): number {
    return this.cartService.getTax();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  updateCartItem(updatedItem: CartItem) {
    this.cartService.addToCart(updatedItem);
  }

  removeCartItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
  navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
