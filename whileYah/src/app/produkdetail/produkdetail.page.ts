import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProduk } from '../data-produk';
import { DataKeranjang } from '../data-keranjang';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false
})
export class ProdukdetailPage implements OnInit {
  index = 0;
  produk: any[] = [];
  jumlahBeli: number=1;
  constructor(private route: ActivatedRoute, private dataProduk: DataProduk,private dataKeranjang:DataKeranjang) { }

  ngOnInit() {
    this.produk = this.dataProduk.produk;
    this.route.params.subscribe(params => {
      this.index = params['id'];
    });
  }
  tambahKeKeranjang(item:any) {
    
    if (item.stok >= this.jumlahBeli) {
      this.dataKeranjang.tambahItem(item.nama, Number(item.harga_jual), this.jumlahBeli);
      alert(`${this.jumlahBeli} ${item.nama} berhasil ditambahkan ke keranjang!`);
      this.jumlahBeli = 1;
    }
  }
  tambahJumlah() {
    if(this.jumlahBeli < this.produk[this.index].stok) {
      this.jumlahBeli++
    }
  }
  kurangJumlah() {
    if(this.jumlahBeli>1) {
      this.jumlahBeli--;
    }
  }
}