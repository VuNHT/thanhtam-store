import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  elements = [];

  headElements = ['Name', 'Price', 'Like'];
  constructor() { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    if (localStorage.getItem('cart') !== null) {
      this.elements = JSON.parse(localStorage.getItem('cart'));
    }
  }

  deleteData(id) {
   this.elements = this.elements.filter(item => item.id !== id);
   localStorage.setItem('cart', JSON.stringify(this.elements));
  }

}
