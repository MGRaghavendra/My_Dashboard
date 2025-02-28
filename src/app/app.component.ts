import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '';
  private authService: AuthService = inject(AuthService);
  isAuthenticated: boolean = false;
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.isAuthenticated);
  }
}
