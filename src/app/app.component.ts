import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thanhtam-store';

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (window.pageYOffset > 140) {
      document.getElementById('nav-fix').style.top = '0';
      document.getElementById('nav-fix').style.position = 'fixed';
      document.getElementById('nav-fix').style.zIndex = '99';
    } else {
      document.getElementById('nav-fix').style.top = 'none';
      document.getElementById('nav-fix').style.position = 'relative';
    }
  }
}
