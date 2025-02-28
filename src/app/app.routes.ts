import { Routes } from '@angular/router';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: WelcomeComponent },
];
