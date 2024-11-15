import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { SignupForm } from '../../interfaces/loginform';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: FormGroup<SignupForm>;
  fieldFocusState: { [key: string]: boolean };

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group<SignupForm>(
      {
        firstname: this.fb.control<string | null>('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        lastname: this.fb.control<string | null>('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: this.fb.control<string | null>('', [
          Validators.required,
          Validators.email,
        ]),
        password: this.fb.control<string | null>('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: this.fb.control<string | null>('', [
          Validators.required,
        ]),
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
    this.fieldFocusState = {
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      confirmPassword: false,
    };
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  };

  onFocus(fieldName: string): void {
    this.fieldFocusState[fieldName] = true; // Set focus state to true for the field
  }

  onBlur(fieldName: string): void {
    this.fieldFocusState[fieldName] = false; // Set focus state to false for the field
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup successful!', this.signupForm.value);
    } else {
      console.log('Signup form is invalid');
    }
  }
  goToLogin() {
    console.log('Navigating to Sign Up');
    this.router.navigate(['/login']);
  }
}
