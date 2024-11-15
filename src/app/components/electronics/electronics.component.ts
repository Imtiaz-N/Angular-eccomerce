import { Component, OnInit } from '@angular/core';
import { ElectonicsService } from '../../Services/electonics.service';
import { NgFor } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartItem } from '../../interfaces/loginform';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [NgFor, CartItemComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css',
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private electronicService: ElectonicsService,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.electronicService.getCategories().subscribe((categories) => {
      const electronicsCategory = categories.find(
        (category) => category.name === 'Electronics'
      );
      if (electronicsCategory) {
        this.products = electronicsCategory.products;
      }
    });
  }
  addToCart(product: Product) {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      quantity: 1,
    };
    this.cartService.addToCart(cartItem);
  }
  showProductDetails(product: Product) {
    this.router.navigate(['/product-details', 'Electronics', product.id]);
  }
  buyNow(product: Product) {
    this.productService.selectProduct(product);
  }
}
