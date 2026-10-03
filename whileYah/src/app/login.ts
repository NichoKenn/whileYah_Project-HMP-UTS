import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {
  isLogin = false;

  username = 'marni';
  password = '123';

  checkLogin(user: string, pass: string): boolean {
    if (this.username === user && this.password === pass) {
      this.isLogin = true;
      return true;
    } else {
      this.isLogin = false;
      return false;
    }
  }
}
