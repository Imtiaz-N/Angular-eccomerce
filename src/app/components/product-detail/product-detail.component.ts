import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Product } from '../../interfaces/loginform';
import { ElectonicsService } from '../../Services/electonics.service';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../interfaces/loginform';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private electronicService: ElectonicsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    const categoryName = this.route.snapshot.paramMap.get('category');

    this.electronicService.getCategories().subscribe((categories) => {
      const category = categories.find((cat) => cat.name === categoryName);
      if (category) {
        this.product = category.products.find(
          (product) => product.id === productId
        );
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
}
