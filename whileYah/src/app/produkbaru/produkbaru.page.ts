import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-produkbaru',
  templateUrl: './produkbaru.page.html',
  styleUrls: ['./produkbaru.page.scss'],
  standalone: false,
})
export class ProdukbaruPage implements OnInit {
  nama: string = '';
  url: string = '';
  stok: number = 0;
  harga_beli: number = 0;
  harga_jual: number = 0;
  kategori: string = '';

  arr_kategori: string[] = [
    'sembako',
    'camilan',
    'obat',
    'minuman',
    'kebersihan',
  ];

  isSubmitted: boolean = false;
  isLogin = false;

  constructor(
    private dataProduk: DataProduk,
    private router: Router,
    private login: Login,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
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

  generateIdOtomatis(): string {
    const semuaProduk = this.dataProduk.getSemuaProduk();

    if (semuaProduk && semuaProduk.length > 0) {
      const idTerakhir = semuaProduk[semuaProduk.length - 1].id;
      const angkaTerakhir = parseInt(idTerakhir.substring(1));
      const angkaBaru = angkaTerakhir + 1;

      return 'P' + angkaBaru.toString().padStart(3, '0');
    } else {
      return 'P001';
    }
  }

  submitProduk() {
    this.isSubmitted = true;

    if (this.cekValidasi()) {
      const idBaru = this.generateIdOtomatis();

      const berhasil = this.dataProduk.tambahProduk(
        idBaru,
        this.nama,
        this.url,
        this.stok,
        this.harga_beli,
        this.harga_jual,
        this.kategori,
      );

      if (berhasil) {
        this.nama = '';
        this.url = '';
        this.stok = 0;
        this.harga_beli = 0;
        this.harga_jual = 0;
        this.kategori = '';
        this.isSubmitted = false;

        this.router.navigate(['/produk']);
      }
    } else {
      console.log('Form belum valid!');
    }
  }
}
