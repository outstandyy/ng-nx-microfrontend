import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLoggedIn: WritableSignal<boolean> = signal(false);

  get isLoggedIn(): boolean {
    return this._isLoggedIn();
  }

  login() {
    console.log('login');
    this._isLoggedIn.set(true);
  }

  logout() {
    console.log('logout');
    this._isLoggedIn.set(false);
  }
}
