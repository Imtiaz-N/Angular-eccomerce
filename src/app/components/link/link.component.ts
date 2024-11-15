import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {}
