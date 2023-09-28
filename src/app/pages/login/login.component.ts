import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
// import { websiteTitle } from "@/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // protected readonly websiteTitle = websiteTitle;
  protected readonly websiteTitle = "MyRoomsAdministrator";
}
