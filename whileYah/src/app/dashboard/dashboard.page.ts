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
  isLogin = false;

  constructor(
    private dataProduk: DataProduk,
    private dataTransaksi: DataTransaksi,
    private router: Router,
    private login: Login,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.refreshData();
  }

  ionViewWillEnter() {
    this.refreshData();
  }

  refreshData() {
    this.produk = this.dataProduk.produk;
  }

  jumlahProduk(): number {
    return this.produk.length;
  }

  totalTransaksi(): number {
    return this.dataTransaksi.hitungTotalTransaksiHariIni();
  }

  totalModal(): number {
    return this.dataTransaksi.hitungTotalModalHariIni();
  }

  totalUntung(): number {
    return this.dataTransaksi.hitungKeuntunganHariIni();
  }

  produkTerlaris(): string {
    return this.dataTransaksi.cariProdukTerlaris();
  }
}

