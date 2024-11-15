import { Component, OnInit } from '@angular/core';
import { HomeessentialService } from '../../Services/homeessential.service';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../interfaces/loginform';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home-essential',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-essential.component.html',
  styleUrl: './home-essential.component.css',
})
export class HomeEssentialComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private homeessential: HomeessentialService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.homeessential.getCategories().subscribe((categories) => {
      const electronicsCategory = categories.find(
        (category) => category.name === 'Home Essential'
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
    this.router.navigate(['/product-details', 'Home Essential', product.id]);
  }
}
