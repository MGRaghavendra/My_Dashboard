import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageService: LocalStorageService =
    inject(LocalStorageService);
  public loggedIn$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  isAuthenticated(): boolean {
    return this.localStorageService.getItem('loggedIn') === 'true';
  }

  clearSession(): void {
    this.localStorageService.clearAll();
  }
}
