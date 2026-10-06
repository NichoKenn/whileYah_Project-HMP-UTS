import { Injectable } from '@angular/core';
import { DataProduk } from './data-produk';

export interface itemTransaksi {
    idProduk: string;
    jumlah: number;
}
export interface Transaksi {
    id: string;
    tanggal: string;
    items: itemTransaksi[];
}

@Injectable({
    providedIn: 'root',
})
export class DataTransaksi {

    constructor(private produkService: DataProduk) { }

    daftarTransaksi = [
        {
            id: 'TRX-001',
            tanggal: '2026-10-01',
            items: [
                { idProduk: 'P001', jumlah: 2 },
                { idProduk: 'P003', jumlah: 1 },
                { idProduk: 'P010', jumlah: 3 }
            ]
        },

        {
            id: 'TRX-002',
            tanggal: '2026-10-02',
            items: [
                { idProduk: 'P014', jumlah: 2 },
                { idProduk: 'P004', jumlah: 1 }
            ]
        },

        {
            id: 'TRX-003',
            tanggal: '2026-10-02',
            items: [
                { idProduk: 'P002', jumlah: 1 },
                { idProduk: 'P011', jumlah: 2 },
                { idProduk: 'P005', jumlah: 1 }
            ]
        },

        {
            id: 'TRX-004',
            tanggal: '2026-10-03',
            items: [
                { idProduk: 'P006', jumlah: 2 },
                { idProduk: 'P004', jumlah: 2 }
            ]
        },

        {
            id: 'TRX-005',
            tanggal: '2026-10-03',
            items: [
                { idProduk: 'P010', jumlah: 5 },
                { idProduk: 'P007', jumlah: 1 }
            ]
        },

        {
            id: 'TRX-006',
            tanggal: '2026-10-04',
            items: [
                { idProduk: 'P015', jumlah: 1 },
                { idProduk: 'P014', jumlah: 2 },
                { idProduk: 'P013', jumlah: 1 }
            ]
        },

        {
            id: 'TRX-007',
            tanggal: '2026-10-05',
            items: [
                { idProduk: 'P001', jumlah: 3 },
                { idProduk: 'P003', jumlah: 2 },
                { idProduk: 'P002', jumlah: 1 }
            ]
        },

        {
            id: 'TRX-008',
            tanggal: '2026-10-05',
            items: [
                { idProduk: 'P008', jumlah: 2 },
                { idProduk: 'P007', jumlah: 1 },
                { idProduk: 'P009', jumlah: 2 }
            ]
        },

        {
            id: 'TRX-009',
            tanggal: '2026-10-06',
            items: [
                { idProduk: 'P012', jumlah: 2 },
                { idProduk: 'P011', jumlah: 3 },
                { idProduk: 'P010', jumlah: 2 }
            ]
        },

        {
            id: 'TRX-010',
            tanggal: '2026-10-07',
            items: [
                { idProduk: 'P005', jumlah: 1 },
                { idProduk: 'P006', jumlah: 1 },
                { idProduk: 'P004', jumlah: 2 },
                { idProduk: 'P008', jumlah: 1 }
            ]
        }
    ];
    getSemuaTransaksi() {
        return this.daftarTransaksi;
    }

    tambahTransaksi(id: string, tanggal: string, items: itemTransaksi[]) {
        this.daftarTransaksi.push({
            id: id,
            tanggal: tanggal,
            items: items
        });
    }

    hapusTransaksi(index: number) {
        if (index >= 0 && index < this.daftarTransaksi.length) {
            this.daftarTransaksi.splice(index, 1);
        }
    }

    getDetailItem(idProduk: string, jumlah: number) {
        for (let produk of this.produkService.produk) {
            if (produk.id === idProduk) {
                return {
                    id: produk.id,
                    nama: produk.nama,
                    harga_jual: produk.harga_jual,
                    harga_beli: produk.harga_beli,
                    url: produk.url,
                    kategori: produk.kategori,
                    stok: produk.stok,
                    subtotal: jumlah * produk.harga_jual,
                    jumlahJual: jumlah
                }
            }
        }

        return null;
    }

    getTanggalHariIni(): string {
        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        return y + '-' + m + '-' + d;
    }

    hitungTotalTransaksiHariIni(): number {
        let total = 0;
        const today = this.getTanggalHariIni();

        for (let trans of this.daftarTransaksi) {
            if (trans.tanggal === today) {
                for (let prodTrans of trans.items) {
                    for (let prod of this.produkService.produk) {
                        if (prodTrans.idProduk === prod.id) {
                            total += prodTrans.jumlah * prod.harga_jual;
                        }
                    }
                }
            }
        }
        return total;
    }

    hitungTotalModalHariIni(): number {
        let modal = 0;
        const today = this.getTanggalHariIni();

        for (let trans of this.daftarTransaksi) {
            if (trans.tanggal === today) {
                for (let prodTrans of trans.items) {
                    for (let prod of this.produkService.produk) {
                        if (prodTrans.idProduk === prod.id) {
                            modal += prodTrans.jumlah * prod.harga_beli;
                        }
                    }
                }
            }
        }
        return modal;
    }

    hitungKeuntunganHariIni(): number {
        return this.hitungTotalTransaksiHariIni() - this.hitungTotalModalHariIni();
    }

    cariProdukTerlaris(): string {
        let penjualanProduk: any = {};
        const today = this.getTanggalHariIni();

        for (let trans of this.daftarTransaksi) {
            if (trans.tanggal === today) {
                for (let prodTrans of trans.items) {
                    if (!penjualanProduk[prodTrans.idProduk]) {
                        penjualanProduk[prodTrans.idProduk] = 0;
                    }
                    penjualanProduk[prodTrans.idProduk] += prodTrans.jumlah;
                }
            }
        }

        let maxJumlah = 0;
        let idTerlaris = '';

        for (let id in penjualanProduk) {
            if (penjualanProduk[id] > maxJumlah) {
                maxJumlah = penjualanProduk[id];
                idTerlaris = id;
            }
        }

        for (let prod of this.produkService.produk) {
            if (prod.id === idTerlaris) {
                return prod.nama;
            }
        }

        return '-';
    }

    displayAllTransaksi(): any[] {
        let hasil: any[] = [];
        for (let trans of this.daftarTransaksi) {
            let detailItems: any[] = [];
            let totalBelanja = 0;

            for (let i of trans.items) {
                let detail = this.getDetailItem(i.idProduk, i.jumlah);
                if (detail) {
                    detailItems.push(detail);
                    totalBelanja += detail.subtotal;
                }
            }

            hasil.push({
                id: trans.id,
                tanggal: trans.tanggal,
                items: detailItems,
                totalPendapatan: totalBelanja
            });
        }
        return hasil;
    }

    prosesCheckout(isiKeranjang: any[]): string {
        let idBaru = 'TRX-' + (this.daftarTransaksi.length + 1);
        let tanggalSekarang = this.getTanggalHariIni();
        let itemTransaksiArr: itemTransaksi[] = [];

        for (let i = 0; i < isiKeranjang.length; i++) {
            let item = isiKeranjang[i];

            itemTransaksiArr.push({
                idProduk: item.id,
                jumlah: item.jumlah,
            });

            let produkAsli = this.produkService.produk.find((p) => p.nama === item.nama);
            if (produkAsli) {
                produkAsli.stok -= item.jumlah;
            }
        }

        this.tambahTransaksi(idBaru, tanggalSekarang, itemTransaksiArr);
        return idBaru;
    }
}
