import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private localStorageService: LocalStorageService =
    inject(LocalStorageService);

  constructor() {
    this.loggedIn = this.localStorageService.getItem('loggedIn') === 'true';
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  clearSession(): void {
    this.localStorageService.clearAll();
  }
}
