import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';
import { DataKeranjang } from '../data-keranjang';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  produk: any[] = [];
  searchTerm:string="";

  constructor(
    private dataProduk: DataProduk,
    private dataKeranjang: DataKeranjang
  ) {}

  ngOnInit() {
    this.inisialisasiProduk();
  }

  ionViewWillEnter() {
    this.inisialisasiProduk();
  }

  inisialisasiProduk() {
  this.produk = []; 
  for(let i in this.dataProduk.produk) {
    let itemAsli = this.dataProduk.produk[i];
    this.produk.push({
      nama: itemAsli.nama,
      harga_jual: itemAsli.harga_jual,
      stok: itemAsli.stok,
      url: itemAsli.url,
      jumlah: 1 
    });
  }
}

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  filterProduk() {
    if(!this.searchTerm) {
      return this.produk;
    }
    return this.produk.filter(item => 
      item.nama.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  getOriginalIndex(item: any): number {
    return this.produk.indexOf(item);
  }

  tambahJumlah(item: any) {
    if (item.jumlah < item.stok) {
      item.jumlah++;
    }
  }

  kurangJumlah(item: any) {
    if (item.jumlah > 1) {
      item.jumlah--;
    }
  }

  tambahKeKeranjang(item: any) {
    if (item.stok >= item.jumlah) {
      this.dataKeranjang.tambahItem(item.nama, Number(item.harga_jual), item.jumlah);
      alert(`${item.jumlah} ${item.nama} berhasil ditambahkan ke keranjang!`);
      item.jumlah = 1;     }
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}