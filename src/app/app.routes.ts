import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HomeEssentialComponent } from './components/home-essential/home-essential.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'electronic', component: ElectronicsComponent },
  { path: 'homeessential', component: HomeEssentialComponent },
  { path: 'product-details/:category/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
];
