import { Component, OnInit } from '@angular/core';
import { DataKeranjang } from '../data-keranjang';
import { DataTransaksi, itemTransaksi } from '../data-transaksi';
import { DataProduk } from '../data-produk';
import { Login } from '../login';
import { Router } from '@angular/router';
import { Transaksi } from '../data-transaksi';

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
    private keranjangService: DataKeranjang,
    private transaksiService: DataTransaksi,
    private dataProduk: DataProduk,
    private login: Login,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.isiTransaksi = this.displayAllTransaksi()
    // this.displayAllTransaksi();
  }

  ionViewWillEnter() {
    this.isiTransaksi = this.displayAllTransaksi()
    // this.displayAllTransaksi();
  }
  muatTransaksi() {
    this.isiTransaksi = this.transaksiService.getSemuaTransaksi();
  }

  displayAllTransaksi() {
        this.isiTransaksi = []
        for (let trans of this.transaksiService.daftarTransaksi) {
            let detailItems: any[] = [];
            let totalBelanja = 0;

            for (let i of trans.items) {
                let detail = this.transaksiService.getDetailItem(i.idProduk, i.jumlah);
                if (detail) {
                    detailItems.push(detail);
                    totalBelanja += detail.subtotal;
                }
            }

            this.isiTransaksi.push({
                id: trans.id,
                tanggal: trans.tanggal,
                items: detailItems,
                totalPendapatan: totalBelanja
            });
        }
        this.router.navigate(['/transaksi']);
        return this.isiTransaksi
    }
}
