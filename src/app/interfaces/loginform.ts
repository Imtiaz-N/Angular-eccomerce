import { AbstractControl } from '@angular/forms';
export interface LoginForm {
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
}
export interface SignupForm {
  firstname: AbstractControl<string | null>;
  lastname: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
  confirmPassword: AbstractControl<string | null>;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
