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

  currentDate = new Date();
  totalModal = 0;
  totalUntung = 0;
  produkTerlaris = '';

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
  }

  ionViewDidEnter() {
    this.produk = this.dataProduk.produk;
    this.transaksi = this.dataTransaksi.daftarTransaksi;
  }

  jumlahProduk(): number {
    return this.produk.length;
  }

  totalTransaksi(): number {
    let transaksi = 0;

    const d = String(this.currentDate.getDate()).padStart(2, '0');
    const m = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const y = this.currentDate.getFullYear();
    const today = y + '-' + m + '-' + d;

    for (let trans of this.transaksi) {
      if (trans.tanggal === today) {
        for (let prodTrans of trans.items) {
          for (let prod of this.produk) {
            if (prodTrans.idProduk === prod.id) {
              transaksi += prodTrans.jumlah * prod.harga_jual;
            }
          }
        }
      }
    }
    return transaksi;
  }
}
