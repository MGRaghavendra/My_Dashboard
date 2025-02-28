import { Injectable } from '@angular/core';
import {
  clearLocalStorage,
  getFromLocalStorage,
  setInLocalStorage,
} from '../utils/local-storage.util';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private versionKey: string = 'v1';
  setItem(key: string, val: string) {
    setInLocalStorage(this.generateVersionKey(key), val);
  }

  getItem(key: string) {
    return getFromLocalStorage(this.generateVersionKey(key));
  }

  clearAll() {
    clearLocalStorage();
  }

  private generateVersionKey(key: string) {
    return `${key}-${this.versionKey}`;
  }
}
