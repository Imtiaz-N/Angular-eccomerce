import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { LoginForm } from '../../interfaces/loginform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group<LoginForm>({
      email: this.fb.control<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<string | null>('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful!', this.loginForm.value);
    } else {
      console.log('Login form is invalid');
    }
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
