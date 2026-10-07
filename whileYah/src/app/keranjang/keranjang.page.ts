import { Component, OnInit } from '@angular/core';
import { DataKeranjang } from '../data-keranjang';
import { DataTransaksi } from '../data-transaksi';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  isiKeranjang: any[] = [];
  totalBelanja: number = 0;
  isLogin = false;
  public alertButtons = ['OK']

  constructor(
    private keranjangService: DataKeranjang,
    private transaksiService: DataTransaksi,
    private login: Login,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.muatKeranjang();
  }

  ionViewWillEnter() {
    this.muatKeranjang();
  }

  muatKeranjang() {
    this.isiKeranjang = this.keranjangService.getKeranjang();
    this.totalBelanja = this.keranjangService.hitungTotal();
  }
  hapus(index: number) {
    this.keranjangService.hapusItem(index);
    this.totalBelanja = this.keranjangService.hitungTotal();
  }
  checkout() {
    if (this.isiKeranjang.length === 0) {
      return;
    }

    let idBaru = this.transaksiService.prosesCheckout(this.isiKeranjang);

    this.keranjangService.kosongkanKeranjang();
    this.isiKeranjang = [];
    this.totalBelanja = 0;
  }
}
