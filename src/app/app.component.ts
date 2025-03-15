import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = '';
  private authService: AuthService = inject(AuthService);
  isAuthenticated: boolean = false;
  private loggedIn$: BehaviorSubject<boolean> = this.authService.loggedIn$;
  ngOnInit(): void {
    this.loggedIn$.subscribe({
      next: (value) => {
        this.isAuthenticated = value;
      },
    });
  }

  ngOnDestroy(): void {
    this.loggedIn$.unsubscribe();
  }
}
