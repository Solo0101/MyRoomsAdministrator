import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyRoomsAdministrator';
  showSideNav: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
      {
        this.showSideNav = !(val.url == '/login' || val.url == '/sign-up');
      }
    });
  }
}
