import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(token: string): void {
    localStorage['token'] = token;
  }

  getToken(): string {
    return localStorage['token'] == undefined ? "" : localStorage['token'];
  }
}
