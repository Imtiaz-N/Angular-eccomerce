import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item: any;
  @Output() update = new EventEmitter<any>();
  @Output() remove = new EventEmitter<void>();

  decrementQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.updateQuantity();
    }
  }

  incrementQuantity() {
    this.item.quantity++;
    this.updateQuantity();
  }

  updateQuantity() {
    this.update.emit(...this.item);
  }

  removeItem() {
    this.remove.emit();
  }
}
