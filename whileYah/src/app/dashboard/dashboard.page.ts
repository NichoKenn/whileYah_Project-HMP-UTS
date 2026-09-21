import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';
import { Transaksi } from '../transaksi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  produk: any[] = [];
  transaksi: any[] = [];

  constructor(
    private dataProduk: DataProduk,
    private dataTransaksi: Transaksi,
  ) {}

  ngOnInit() {
    this.produk = this.dataProduk.produk;
    this.transaksi = this.dataTransaksi.daftarTransaksi;
  }
}
