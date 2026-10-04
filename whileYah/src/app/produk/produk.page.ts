import { Component, OnInit } from '@angular/core';
import { DataProduk } from '../data-produk';
import { DataKeranjang } from '../data-keranjang';
import { AnimationController } from '@ionic/angular';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  produk: any[] = [];
  searchTerm: string = '';
  isLogin = false;

  constructor(
    private dataProduk: DataProduk,
    private dataKeranjang: DataKeranjang,
    private animationCtrl: AnimationController,
    private login: Login,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    this.inisialisasiProduk();
  }

  ionViewDidEnter() {
    this.inisialisasiProduk();
  }

  inisialisasiProduk() {
    this.produk = [];
    for (let i in this.dataProduk.produk) {
      let itemAsli = this.dataProduk.produk[i];
      this.produk.push({
        id: itemAsli.id,
        nama: itemAsli.nama,
        harga_jual: itemAsli.harga_jual,
        stok: itemAsli.stok,
        url: itemAsli.url,
        kategori: itemAsli.kategori,
        jumlah: 1,
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
    if (!this.searchTerm) {
      return this.produk;
    }
    return this.produk.filter((item) =>
      item.nama.toLowerCase().includes(this.searchTerm.toLowerCase()),
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
      this.dataKeranjang.tambahItem(
        item.id,
        item.nama,
        Number(item.harga_jual),
        item.jumlah,
      );
      alert(`${item.jumlah} ${item.nama} berhasil ditambahkan ke keranjang!`);
      item.jumlah = 1;
    }
  }

  // Animasi saat mouse menyorot tombol (Membesar)
  hoverMasuk(event: any) {
    const tombol = event.target;

    const animation = this.animationCtrl
      .create()
      .addElement(tombol)
      .duration(200) // 0.2 detik
      .easing('ease-out')
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 1, transform: 'scale(1.15)' },
      ]);
    animation.fill('forwards').play();
  }

  // Animasi saat mouse pergi dari tombol (Kembali normal)
  hoverKeluar(event: any) {
    const tombol = event.target;

    const animation = this.animationCtrl
      .create()
      .addElement(tombol)
      .duration(200)
      .easing('ease-in')
      .keyframes([
        { offset: 0, transform: 'scale(1.15)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    animation.fill('forwards').play();
  }
}
