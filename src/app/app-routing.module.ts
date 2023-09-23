import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { MyProfileComponent } from "./pages/my-profile/my-profile.component";
import { SettingsComponent} from "./pages/settings/settings.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

import { authGuard } from "./guards/auth.guard";
import { adminGuard } from "./guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: '/admin',
    component: AdminDashboardComponent,
    canActivate: [authGuard, adminGuard]
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/sign-up',
    component: SignUpComponent
  },
  {
    path: '/settings',
    component: SettingsComponent
  },
  {
    path: '/my-profile',
    component: MyProfileComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
