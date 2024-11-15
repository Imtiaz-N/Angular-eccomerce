import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, NgFor],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories = [
    {
      name: 'Electronics',
      link: '/electronic',
      items: [
        { name: 'Headset', icon: '/assets/images/headset.webp' },
        { name: 'Keyboard', icon: '/assets/images/keyboad.jpg' },
        { name: 'Mouse', icon: '/assets/images/mouse.webp' },
        { name: 'Smartphone', icon: '/assets/images/phone.webp' },
      ],
    },
    {
      name: 'Home essential',
      link: '/homeessential',
      items: [
        { name: 'Cleaning Tools', icon: '/assets/images/h1.jpg' },
        { name: 'Home Storage', icon: '/assets/images/h2.jpg' },
        { name: 'Home Decore', icon: '/assets/images/h3.jpg' },
        { name: 'Bedding', icon: '/assets/images/h4.jpg' },
      ],
    },
    {
      name: 'Toys',
      link: '/toys',
      items: [
        { name: "Ride on's", icon: '/assets/images/T2.jpg' },
        { name: 'Building & Construction', icon: '/assets/images/T3.jpg' },
        { name: 'Dolls & Doll Houses', icon: '/assets/images/T4.jpg' },
        { name: 'Swimming pools', icon: '/assets/images/T5.jpg' },
      ],
    },
    {
      name: 'Fashion',
      link: '/fashion',
      items: [
        { name: 'Jeans', icon: '/assets/images/c1.jpg' },
        { name: 'Tops', icon: '/assets/images/c2.jpg' },
        { name: 'Dresses', icon: '/assets/images/c3.jpg' },
        { name: 'Shoes', icon: '/assets/images/c4.jpg' },
      ],
    },
    {
      name: 'Travel Essentials',
      link: '/travel',
      items: [
        { name: 'Backpacks', icon: '/assets/images/tr1.jpg' },
        { name: 'Suitcases', icon: '/assets/images/tr2.jpg' },
        { name: 'Accessories', icon: '/assets/images/tr3.jpg' },
        { name: 'Handbags', icon: '/assets/images/tr4.jpg' },
      ],
    },
    {
      name: 'Watches',
      link: '/watch',
      items: [
        { name: 'Women', icon: '/assets/images/w1.jpg' },
        { name: 'Men', icon: '/assets/images/w2.jpg' },
        { name: 'Girls', icon: '/assets/images/w3.jpg' },
        { name: 'Boys', icon: '/assets/images/w4.jpg' },
      ],
    },
    {
      name: 'Sports',
      link: '/sports',
      items: [
        { name: 'Cycling', icon: '/assets/images/sp-1.jpg' },
        { name: 'Running', icon: '/assets/images/sp-2.jpg' },
        { name: 'Exercise & Fitness', icon: '/assets/images/sp-3.jpg' },
        { name: 'Golf', icon: '/assets/images/sp-4.jpg' },
      ],
    },
    {
      name: 'Beauty Products',
      link: '/watch',
      items: [
        { name: 'Skincare', icon: '/assets/images/be-1.jpg' },
        { name: 'Makeup', icon: '/assets/images/be-2.jpg' },
        { name: 'Nails', icon: '/assets/images/be-3.jpg' },
        { name: 'Fragrances', icon: '/assets/images/be-4.jpg' },
      ],
    },
    {
      name: 'Travel Essentials',
      link: '/travel',
      items: [
        { name: 'Backpacks', icon: '/assets/images/tr1.jpg' },
        { name: 'Suitcases', icon: '/assets/images/tr2.jpg' },
        { name: 'Accessories', icon: '/assets/images/tr3.jpg' },
        { name: 'Handbags', icon: '/assets/images/tr4.jpg' },
      ],
    },

    {
      name: 'Home essential',
      link: '/homeessential',
      items: [
        { name: 'Cleaning Tools', icon: '/assets/images/h1.jpg' },
        { name: 'Home Storage', icon: '/assets/images/h2.jpg' },
        { name: 'Home Decore', icon: '/assets/images/h3.jpg' },
        { name: 'Bedding', icon: '/assets/images/h4.jpg' },
      ],
    },
    {
      name: 'Watches',
      link: '/watch',
      items: [
        { name: 'Women', icon: '/assets/images/w1.jpg' },
        { name: 'Men', icon: '/assets/images/w2.jpg' },
        { name: 'Girls', icon: '/assets/images/w3.jpg' },
        { name: 'Boys', icon: '/assets/images/w4.jpg' },
      ],
    },
    {
      name: 'Toys',
      link: '/toys',
      items: [
        { name: "Ride on's", icon: '/assets/images/T2.jpg' },
        { name: 'Building & Construction', icon: '/assets/images/T3.jpg' },
        { name: 'Dolls & Doll Houses', icon: '/assets/images/T4.jpg' },
        { name: 'Swimming pools', icon: '/assets/images/T5.jpg' },
      ],
    },
  ];
}
