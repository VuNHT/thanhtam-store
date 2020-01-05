import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() outSearch = new EventEmitter<any>();

  @Input() 
  set inCart(value) {
    if (localStorage.getItem('cart') !== null) {
      this.getCart = JSON.parse(localStorage.getItem('cart'));
    }
  }
  getCart = [];
  public keySearch;
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.outSearch.emit(this.keySearch);
  }

}
