import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ServerAllService } from 'src/app/server-all.service';

@Component({
  selector: "app-body-store",
  templateUrl: "./body-store.component.html",
  styleUrls: ["./body-store.component.scss"]
})
export class BodyStoreComponent implements OnInit {
  public data = [];
  public dataCart = [];
  public mockData = [];
  @Output() outCart = new EventEmitter<any>();

  @Input() 
  set keySearch(value) {
    if (value) {
      const dataSearch = [];
      this.mockData.forEach(item => {
        if (item.name.toUpperCase().indexOf(value.toUpperCase()) >= 0) {
          dataSearch.push(item);
        }
      });
      this.data = dataSearch;
    } else {
      this.getAllData();
    }
  }
  
  constructor(
    public serverAll: ServerAllService
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.serverAll.getData().subscribe(
      (item: any) => {
        this.data = item;
        this.mockData = item;
      }
    )
  }

  addLike(item) {
    const likePlus = item.like;
    const data = {
      like: likePlus + 1
    }
    this.serverAll.putData(item.id, data).subscribe(item => {
      this.getAllData();
    });
  }

  addCart(item) {
    let dataLocal = [];
    if (localStorage.getItem('cart') !== null) {
        dataLocal = JSON.parse(localStorage.getItem('cart'));
        const booleanPush = dataLocal.filter(element => element.id === item.id)
        if (booleanPush.length === 0) {
          dataLocal.push(item);
        }
    } else {
      dataLocal.push(item);
    }

    // if (dataLocal) {
    localStorage.setItem('cart', JSON.stringify(dataLocal));
    this.outCart.emit(dataLocal);
    // }
  }

}
