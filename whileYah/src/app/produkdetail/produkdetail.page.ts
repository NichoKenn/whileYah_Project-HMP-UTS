import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProduk } from '../data-produk';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {
  index = 0;
  isLogin = false;
  produk: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataProduk: DataProduk,
    private login: Login,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.produk = this.dataProduk.produk;
    this.route.params.subscribe((params) => {
      this.index = parseInt(params['id'], 10);
    });
  }

  ionViewDidEnter() {
    this.produk = this.dataProduk.produk;
  }
}
