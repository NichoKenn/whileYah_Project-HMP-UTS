import { Component, OnInit } from '@angular/core';
import { DataTransaksi } from '../data-transaksi';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  isiTransaksi: any[] = [];
  isLogin = false;
  constructor(
    private transaksiService: DataTransaksi,
    private login: Login,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.muatTransaksi();
  }

  ionViewWillEnter() {
    this.muatTransaksi();
  }

  muatTransaksi() {
    this.isiTransaksi = this.transaksiService.displayAllTransaksi();
  }
}

