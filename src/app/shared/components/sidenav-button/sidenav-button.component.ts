import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss']
})
export class SidenavButtonComponent {
  @Input() name!: string;
  @Input() icon!: string;

}
