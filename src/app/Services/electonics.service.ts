import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'https://json-serve-q964.onrender.com';
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
export class ElectonicsService {
  private apiUrl = `${BASE_URL}/categories`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
