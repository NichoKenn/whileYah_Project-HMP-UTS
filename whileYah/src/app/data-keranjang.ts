import { Injectable } from '@angular/core';

export interface ProdukItem {
  nama: string;
  harga_jual: number;
  jumlah: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataKeranjang {
  keranjangItems: ProdukItem[] = [];

  getKeranjang() {
    return this.keranjangItems;
  }

  tambahItem(p_nama: string, p_harga_jual: number, p_jumlah: number) {
    let sudahAda = false;
    for (let i = 0; i < this.keranjangItems.length; i++) {
      if (this.keranjangItems[i].nama === p_nama) {
        this.keranjangItems[i].jumlah += p_jumlah;
        sudahAda = true;
        break;
      }
    }

    if (!sudahAda) {
      this.keranjangItems.push({
        nama: p_nama,
        harga_jual: p_harga_jual,
        jumlah: p_jumlah
      });
    }
  }

  hapusItem(index: number) {  
    if (index >= 0 && index < this.keranjangItems.length) {
      this.keranjangItems.splice(index, 1);
    }
  }

  hitungTotal(): number {
    let total = 0;
    for (let i = 0; i < this.keranjangItems.length; i++) {
      total += this.keranjangItems[i].harga_jual * this.keranjangItems[i].jumlah;
    }
    return total;
  }

  kosongkanKeranjang() {
    this.keranjangItems = [];
  }
}
