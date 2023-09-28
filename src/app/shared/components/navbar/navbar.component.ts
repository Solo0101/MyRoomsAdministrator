import {Component, Input} from '@angular/core';
import { websiteTitle } from "@/constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()
  sidenav: any;

  @Input()
  opened: boolean = false;

  @Input()
  signout: any;

  // protected readonly websiteTitle = websiteTitle;
  protected readonly websiteTitle = "MyRoomsAdministrator";
}
