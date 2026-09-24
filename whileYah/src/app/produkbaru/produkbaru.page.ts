import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProduk } from '../data-produk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produkbaru',
  templateUrl: './produkbaru.page.html',
  styleUrls: ['./produkbaru.page.scss'],
  standalone: false,
})
export class ProdukbaruPage implements OnInit {
  produkForm!: FormGroup;

  arr_kategori: string[] = [
    'sembako',
    'camilan',
    'obat',
    'minuman',
    'kebersihan'
  ];

  isSubmitted: boolean = false;

  constructor(
    private dataProduk: DataProduk,
    private router: Router
  ) {}

  ngOnInit() {
    this.produkForm = new FormGroup({
      nama: new FormControl('', [Validators.required]),
      url: new FormControl(''),
      stok: new FormControl(0, [Validators.required, Validators.min(0)]),
      harga_beli: new FormControl(0, [Validators.required, Validators.min(1)]),
      harga_jual: new FormControl(0, [Validators.required, Validators.min(1)]),
      kategori: new FormControl('', [Validators.required])
    });
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

    if (this.produkForm.valid) {
      const idBaru = this.generateIdOtomatis();
      const formValue = this.produkForm.value;

      const berhasil = this.dataProduk.tambahProduk(
        idBaru,
        formValue.nama,
        formValue.url,
        formValue.stok,
        formValue.harga_beli,
        formValue.harga_jual,
        formValue.kategori
      );

      if (berhasil) {
        this.produkForm.reset({ 
          stok: 0, 
          harga_beli: 0, 
          harga_jual: 0 });
        this.isSubmitted = false;

        this.router.navigate(['/produk']);
      }

    } else {
      console.log('Form belum valid!');
    }
  }
}