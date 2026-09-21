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
  constructor(private dataProduk: DataProduk) {}

  ngOnInit() {
    this.produk = this.dataProduk.produk;
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}