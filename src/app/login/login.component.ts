import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName: any;
  public passWord: any;
  public error = false;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    console.log(this.userName);
    if (this.userName === 'admin' && this.passWord === 'admin') {
      this.router.navigateByUrl('/add-product');
    } else {
      this.error = true;
    }
  }

}
