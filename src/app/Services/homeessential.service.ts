import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class HomeessentialService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
