import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/loginform';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSubject = new BehaviorSubject<Product | null>(null);
  selectedProduct$ = this.selectedProductSubject.asObservable();

  selectProduct(product: Product) {
    console.log('hellooo');
    this.selectedProductSubject.next(product);
  }

  constructor() {}
}
