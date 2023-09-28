import {Component, Input} from '@angular/core';
import { AppComponent } from "@/app/app.component";

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent {
  @Input() name!: string;
  @Input() icon!: string;

}
