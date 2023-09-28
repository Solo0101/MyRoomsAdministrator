import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
// import {websiteTitle} from "@/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title: string = websiteTitle;
  title: string = "MyRoomsAdministrator";
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
