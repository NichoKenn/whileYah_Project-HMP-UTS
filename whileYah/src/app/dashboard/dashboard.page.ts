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
      if (trans.tanggal === /*today*/ '2026-09-30') {
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

  totalModal(): number {
    let modal = 0;

    const d = String(this.currentDate.getDate()).padStart(2, '0');
    const m = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const y = this.currentDate.getFullYear();
    const today = y + '-' + m + '-' + d;

    for (let trans of this.transaksi) {
      if (trans.tanggal === /*today*/ '2026-09-30') {
        for (let prodTrans of trans.items) {
          for (let prod of this.produk) {
            if (prodTrans.idProduk === prod.id) {
              modal += prodTrans.jumlah * prod.harga_beli;
            }
          }
        }
      }
    }
    return modal;
  }

  totalUntung(): number {
    let untung = this.totalTransaksi() - this.totalModal();
    return untung;
  }

  produkTerlaris(): string {
    let penjualanProduk: any = {};

    const d = String(this.currentDate.getDate()).padStart(2, '0');
    const m = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const y = this.currentDate.getFullYear();
    const today = y + '-' + m + '-' + d;

    // Hitung penjualan tiap produk hari ini
    for (let trans of this.transaksi) {
      if (trans.tanggal === /*today*/ '2026-09-30') {
        for (let prodTrans of trans.items) {
          if (!penjualanProduk[prodTrans.idProduk]) {
            penjualanProduk[prodTrans.idProduk] = 0;
          }
          penjualanProduk[prodTrans.idProduk] += prodTrans.jumlah;
        }
      }
    }

    // Cari jumlah terbesar
    let maxJumlah = 0;
    let idTerlaris = '';

    for (let id in penjualanProduk) {
      if (penjualanProduk[id] > maxJumlah) {
        maxJumlah = penjualanProduk[id];
        idTerlaris = id;
      }
    }

    // Cari nama produk
    for (let prod of this.produk) {
      if (prod.id === idTerlaris) {
        return prod.nama;
      }
    }

    return '-'; // Return jika tidak ada transaksi
  }
}
