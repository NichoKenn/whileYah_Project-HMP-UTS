import { Component, OnInit } from '@angular/core';
import { DataKeranjang } from '../data-keranjang';
import { DataTransaksi } from '../data-transaksi';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  isiKeranjang: any[] = [];
  totalBelanja: number = 0;
  constructor(private keranjangService:DataKeranjang, private transaksiService:DataTransaksi) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.isiKeranjang = this.keranjangService.getKeranjang();
    this.totalBelanja = this.keranjangService.hitungTotal();
  }
  hapus(index:number) {
    this.keranjangService.hapusItem(index);
    this.totalBelanja=this.keranjangService.hitungTotal();
  }
  checkout() {
    if (this.isiKeranjang.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    let riwayatSaatIni = this.transaksiService.getSemuaTransaksi();
    let idBaru = 'TRX-' + (riwayatSaatIni.length + 1); 
    let tanggalSekarang = new Date().toLocaleDateString('id-ID'); 

    for (let i = 0; i < this.isiKeranjang.length; i++) {
      let item = this.isiKeranjang[i];
      let totalHargaItem = item.harga_jual * item.jumlah;

      this.transaksiService.tambahTransaksi(
        idBaru, 
        tanggalSekarang, 
        item.nama, 
        item.jumlah, 
        totalHargaItem
      );
    }
    this.keranjangService.kosongkanKeranjang();
    this.isiKeranjang = [];
    this.totalBelanja = 0;
    alert('Transaksi ' + idBaru + ' berhasil dikonfirmasi!');
  }
}
