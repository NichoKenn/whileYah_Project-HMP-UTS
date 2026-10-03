import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';
import { DataTransaksi } from '../data-transaksi';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  produk: any[] = [];
  transaksi: any[] = [];
  isLogin = false;

  constructor(
    private dataProduk: DataProduk,
    private dataTransaksi: DataTransaksi,
    private router: Router,
    private login: Login,
  ) {}

  ngOnInit() {
    this.produk = this.dataProduk.produk;
    this.transaksi = this.dataTransaksi.daftarTransaksi;

    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
  }
}
