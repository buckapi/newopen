import { Component, OnInit } from '@angular/core';
import { Butler } from '@services/butler.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
  private readonly router: Router,
    public _butler:Butler
    ) { }

  ngOnInit(): void {
  }

}
