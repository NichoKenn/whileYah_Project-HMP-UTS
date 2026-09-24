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
  constructor(private route: ActivatedRoute, private dataProduk: DataProduk,private dataKeranjang:DataKeranjang) { }

  ngOnInit() {
    this.produk = this.dataProduk.produk;
    this.route.params.subscribe(params => {
      this.index = params['id'];
    });
  }
  tambahKeKeranjang(item:any) {
    if (item.stok> 0) {
    this.dataKeranjang.tambahItem(item.nama, item.harga_jual, 1);
    item.stok-=1;
    alert(item.nama + ' berhasil ditambahkan ke keranjang!');
    }
   
  }
}