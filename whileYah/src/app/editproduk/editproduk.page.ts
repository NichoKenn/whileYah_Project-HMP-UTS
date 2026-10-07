import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataProduk } from '../data-produk';
import { Login } from '../login';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {
  indexProduk!: number;
  isSubmitted: boolean = false;
  isLogin = false;

  nama: string = '';
  harga_beli: number = 0;
  harga_jual: number = 0;
  stok: number = 0;
  kategori: string = '';

  arr_kategori: string[] = [
    'sembako',
    'camilan',
    'obat',
    'minuman',
    'kebersihan',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataProduk: DataProduk,
    private login: Login,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.route.params.subscribe((params) => {
      this.indexProduk = Number(params['id']);
      let produkAsli = this.dataProduk.produk[this.indexProduk];
      if (produkAsli) {
        this.nama = produkAsli.nama;
        this.harga_beli = produkAsli.harga_beli;
        this.harga_jual = produkAsli.harga_jual;
        this.stok = produkAsli.stok;
        this.kategori = produkAsli.kategori;
      }
    });
  }

  cekValidasi(): boolean {
    return (
      this.nama !== '' &&
      this.stok >= 0 &&
      this.harga_beli > 0 &&
      this.harga_jual > 0 &&
      this.kategori !== ''
    );
  }

  simpanEdit() {
    this.isSubmitted = true;

    if (this.cekValidasi()) {
      let dataLama = this.dataProduk.produk[this.indexProduk];

      if (
        this.nama === dataLama.nama &&
        this.stok === dataLama.stok &&
        this.harga_beli === dataLama.harga_beli &&
        this.harga_jual === dataLama.harga_jual &&
        this.kategori === dataLama.kategori
      ) {
        alert('Gagal! Tidak ada data yang diubah.');
        return;
      }

      this.dataProduk.editProduk(
        this.indexProduk,
        this.nama,
        dataLama.url,
        this.stok,
        this.harga_beli,
        this.harga_jual,
        this.kategori,
      );

      alert('SUKSES! Data diubah menjadi: ' + this.nama);
      this.isSubmitted = false;
      this.router.navigate(['/produk']);
    }
  }
}
