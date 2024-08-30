import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  setItem(key: string, value: any) {
    const serializeObject = JSON.stringify(value);
    localStorage.setItem(key, serializeObject);
  }

  getItem(key: string) {
    const deserializeObject = JSON.parse(key);
    return localStorage.getItem(deserializeObject);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key)
  }
}
