import { Component, OnInit } from '@angular/core';
import { ServerAllService } from '../server-all.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public name;
  public price;
  public image;
  public like;
  public error = false;
  constructor(
    public serverAll: ServerAllService
  ) { }

  elements: any;

  headElements = ['Name', 'Price', 'Image URL', 'Like'];

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.serverAll.getData().subscribe(item => {
      this.elements = item;
    })
  }

  addData() {
    if (this.name && this.price && this.image) {
      this.error = false;
      const data = {
        name: this.name,
        price: this.price,
        image: this.image,
        like: 0
      }
      console.log(data);
      this.serverAll.postData(data).subscribe(item => {
        console.log(item);
        this.getAllData();
      })
    } else {
      this.error = true;
    }
  }

  deleteData(id) {
    console.log(id);
    this.serverAll.deleteData(id).subscribe(item => {
      console.log(item);
      this.getAllData();
    })
  }

}
