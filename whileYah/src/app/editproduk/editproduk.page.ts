import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular/nav-controller';
import { DataProduk } from '../data-produk';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {
  editForm!: FormGroup;
  indexProduk!: number;
  isSubmitted: boolean = false;

  arr_kategori: string[] = ['sembako', 'camilan', 'obat', 'minuman', 'kebersihan'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private dataProduk: DataProduk
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      nama: ['', Validators.required],
      harga_beli: ['', [Validators.required, Validators.min(1)]],
      harga_jual: ['', [Validators.required, Validators.min(1)]],
      stok: ['', [Validators.required, Validators.min(0)]],
      kategori: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.indexProduk = Number(params['id']);
      let produkAsli = this.dataProduk.produk[this.indexProduk];
      if (produkAsli) {
        this.editForm.patchValue({
          nama: produkAsli.nama,
          harga_beli: produkAsli.harga_beli,
          harga_jual: produkAsli.harga_jual,
          stok: produkAsli.stok,
          kategori: produkAsli.kategori
        });
      }
    });
  }

  simpanEdit() {
    this.isSubmitted = true;

    if (this.editForm.valid) {
      let dataLama = this.dataProduk.produk[this.indexProduk];
      this.dataProduk.editProduk(
        this.indexProduk,
        this.editForm.value.nama,
        dataLama.url,
        this.editForm.value.stok,
        this.editForm.value.harga_beli,
        this.editForm.value.harga_jual,
        this.editForm.value.kategori
      );

      alert('SUKSES! Data diubah menjadi: ' + this.editForm.value.nama);
      this.isSubmitted = false;
      this.navCtrl.navigateRoot('/produk');
    }
  }
}
