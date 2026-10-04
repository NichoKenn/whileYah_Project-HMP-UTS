import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor(
    private login: Login,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.login.isLogin) {
      this.router.navigate(['/dashboard']);
    }
  }

  ionViewWillEnter() {
    this.username = '';
    this.password = '';
    this.sudahCoba = false;
    this.hasilCek = false;
  }

  sudahCoba = false;
  hasilCek = false;
  username = '';
  password = '';

  cekLogin() {
    this.sudahCoba = true;
    this.hasilCek = this.login.checkLogin(this.username, this.password);
    if (this.hasilCek) {
      this.router.navigate(['/dashboard']);
    }
  }
}
