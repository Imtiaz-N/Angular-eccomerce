import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
