import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  produk: any[] = [];
    transaksi: any[] = [];
  
    constructor(
      private dataProduk: DataProduk,
    ) {}
  
    ngOnInit() {
      this.produk = this.dataProduk.produk;
    }
}
