import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { LinkComponent } from './components/link/link.component';
import { SmFooterComponent } from './components/sm-footer/sm-footer.component';
import { NgClass, NgIf } from '@angular/common';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CategoryListComponent,
    LinkComponent,
    SmFooterComponent,
    NgIf,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';
  showNavbar: boolean = false;
  showLink: boolean = false;
  showFooter: boolean = false;
  paddingClass: string = 'mt-6';
  showCartIcon: boolean = false;
  isHomePage: boolean = false;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.showNavbar = currentUrl === '/home';
      this.showLink = true;
      this.showFooter = currentUrl === '/home';
      this.paddingClass = currentUrl === '/home' ? 'mt-32' : 'mt-6';
      this.isHomePage = currentUrl === '/home';
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url === '/home' ||
          (!event.url.includes('/cart') && !event.url.includes('/checkout'))
        ) {
          this.cartService.clearLocalStorageCart();
        }
      }
    });
  }
}
