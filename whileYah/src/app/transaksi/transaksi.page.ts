import { Component, OnInit } from '@angular/core';
import { DataKeranjang } from '../data-keranjang';
import { DataTransaksi } from '../data-transaksi';
import { DataProduk } from '../data-produk';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  isiTransaksi: any[] = [];
  constructor(private keranjangService: DataKeranjang, private transaksiService: DataTransaksi, private dataProduk: DataProduk) { }

  ngOnInit() {
    this.muatTransaksi()
  }
  muatTransaksi() {
    this.isiTransaksi = this.transaksiService.getSemuaTransaksi();
  }
}
