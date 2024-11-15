import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../interfaces/loginform';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/loginform';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  selectedPaymentMethod: string = 'cash';
  cartItems: CartItem[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)],
      ],
      address: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });

    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
    this.productService.selectedProduct$.subscribe({
      next: (product) => {
        this.selectedProduct = product;
        console.log('Selected Product in Checkout:', this.selectedProduct);
      },
      error: (err) => {
        console.log('Error in subscription:', err); // Log any errors
      },
      complete: () => {
        console.log('Subscription complete');
      },
    });
  }
  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Order placed:', this.checkoutForm.value);
    } else {
      console.log('Form is invalid');
    }
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
}
