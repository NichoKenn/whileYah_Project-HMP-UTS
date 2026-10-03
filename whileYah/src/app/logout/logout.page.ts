import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: false,
})
export class LogoutPage implements OnInit {

  constructor(
    private login: Login,
    private router: Router,
  ) {}

  ngOnInit() {}

  logout() {
    this.login.isLogin = false;
    this.router.navigate(['/login']);
  }

  batal() {
    this.router.navigate(['/dashboard']);
  }
}
