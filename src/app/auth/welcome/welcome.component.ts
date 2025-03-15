import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-welcome',
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true),
  });
  private localstorageService: LocalStorageService =
    inject(LocalStorageService);

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  isAuthenticated: boolean = false;
  private loggedIn$: BehaviorSubject<boolean> = this.authService.loggedIn$;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.router.navigate(['/']);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.localstorageService.setItem('loggedIn', 'true');
      this.loggedIn$.next(true);
      this.router.navigate(['/']);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.loggedIn$.unsubscribe();
  }
}
