import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProduk } from '../data-produk';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false
})
export class ProdukdetailPage implements OnInit {
  index = 0;
  produk: any[] = [];
  constructor(private route: ActivatedRoute, private dataProduk: DataProduk) { }

  ngOnInit() {
    this.produk = this.dataProduk.produk;
    this.route.params.subscribe(params => {
      this.index = params['id'];
    });
  }
}