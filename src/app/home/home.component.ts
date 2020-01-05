import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keySearch: any;
  outCartHan: any;
  constructor() { }

  ngOnInit() {
  }

  sendKey(event) {
    this.keySearch = event;
  }

  outCart(event) {
    this.outCartHan = event;
  }
}
