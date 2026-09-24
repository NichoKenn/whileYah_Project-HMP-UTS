import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataTransaksi {
    riwayatTransaksi: DataTransaksi[] = [];
    daftarTransaksi = [
        {
            id: 'TRX-001',
            tanggal: '2025-09-15',
            namaProduk: 'BERAS SUMO',
            jumlah: 2,
            totalHarga: 196000,
        },
        {
            id: 'TRX-002',
            tanggal: '2025-09-28',
            namaProduk: 'SABUN LIFEBUOY',
            jumlah: 3,
            totalHarga: 75000,
        },
        {
            id: 'TRX-003',
            tanggal: '2025-10-05',
            namaProduk: 'MINYAK BIMOLI',
            jumlah: 1,
            totalHarga: 37000,
        },
        {
            id: 'TRX-004',
            tanggal: '2025-10-12',
            namaProduk: 'BISKUIT KHONG GUAN',
            jumlah: 1,
            totalHarga: 50000,
        },
        {
            id: 'TRX-005',
            tanggal: '2025-11-02',
            namaProduk: 'LE MINERALE',
            jumlah: 5,
            totalHarga: 30000,
        },
        {
            id: 'TRX-006',
            tanggal: '2025-11-20',
            namaProduk: 'WAFER TANGO',
            jumlah: 2,
            totalHarga: 44000,
        },
        {
            id: 'TRX-007',
            tanggal: '2025-12-01',
            namaProduk: 'GULA GULAKU',
            jumlah: 3,
            totalHarga: 39000,
        },
        {
            id: 'TRX-008',
            tanggal: '2025-12-15',
            namaProduk: 'SHAMPOO PANTENE',
            jumlah: 1,
            totalHarga: 32000,
        },
        {
            id: 'TRX-009',
            tanggal: '2025-12-28',
            namaProduk: 'BODREX',
            jumlah: 2,
            totalHarga: 20000,
        },
        {
            id: 'TRX-010',
            tanggal: '2026-01-05',
            namaProduk: 'SPRITE',
            jumlah: 4,
            totalHarga: 20000,
        },
        {
            id: 'TRX-011',
            tanggal: '2026-01-18',
            namaProduk: 'KACANG GARUDA',
            jumlah: 3,
            totalHarga: 36000,
        },
        {
            id: 'TRX-012',
            tanggal: '2026-02-02',
            namaProduk: 'PANADOL',
            jumlah: 1,
            totalHarga: 12000,
        },
        {
            id: 'TRX-013',
            tanggal: '2026-02-14',
            namaProduk: 'BERAS SUMO',
            jumlah: 1,
            totalHarga: 98000,
        },
        {
            id: 'TRX-014',
            tanggal: '2026-03-01',
            namaProduk: 'SABUN EKONOMI',
            jumlah: 2,
            totalHarga: 24000,
        },
        {
            id: 'TRX-015',
            tanggal: '2026-03-15',
            namaProduk: 'KRATINGDAENG',
            jumlah: 2,
            totalHarga: 30000,
        },
        {
            id: 'TRX-016',
            tanggal: '2026-04-03',
            namaProduk: 'OSKADON',
            jumlah: 2,
            totalHarga: 16000,
        },
        {
            id: 'TRX-017',
            tanggal: '2026-04-20',
            namaProduk: 'MINYAK BIMOLI',
            jumlah: 2,
            totalHarga: 74000,
        },
        {
            id: 'TRX-018',
            tanggal: '2026-05-05',
            namaProduk: 'GULA GULAKU',
            jumlah: 1,
            totalHarga: 13000,
        },
        {
            id: 'TRX-019',
            tanggal: '2026-05-18',
            namaProduk: 'WAFER TANGO',
            jumlah: 5,
            totalHarga: 110000,
        },
        {
            id: 'TRX-020',
            tanggal: '2026-06-01',
            namaProduk: 'LE MINERALE',
            jumlah: 10,
            totalHarga: 60000,
        },
        {
            id: 'TRX-021',
            tanggal: '2026-06-15',
            namaProduk: 'BODREX',
            jumlah: 1,
            totalHarga: 10000,
        },
        {
            id: 'TRX-022',
            tanggal: '2026-07-02',
            namaProduk: 'BISKUIT KHONG GUAN',
            jumlah: 2,
            totalHarga: 100000,
        },
        {
            id: 'TRX-023',
            tanggal: '2026-07-16',
            namaProduk: 'SPRITE',
            jumlah: 3,
            totalHarga: 15000,
        },
        {
            id: 'TRX-024',
            tanggal: '2026-08-01',
            namaProduk: 'KACANG GARUDA',
            jumlah: 2,
            totalHarga: 24000,
        },
        {
            id: 'TRX-025',
            tanggal: '2026-08-15',
            namaProduk: 'BERAS SUMO',
            jumlah: 3,
            totalHarga: 294000,
        },
        {
            id: 'TRX-026',
            tanggal: '2026-08-28',
            namaProduk: 'SHAMPOO PANTENE',
            jumlah: 2,
            totalHarga: 64000,
        },
        {
            id: 'TRX-027',
            tanggal: '2026-09-02',
            namaProduk: 'SABUN LIFEBUOY',
            jumlah: 1,
            totalHarga: 25000,
        },
        {
            id: 'TRX-028',
            tanggal: '2026-09-08',
            namaProduk: 'KRATINGDAENG',
            jumlah: 3,
            totalHarga: 45000,
        },
        {
            id: 'TRX-029',
            tanggal: '2026-09-15',
            namaProduk: 'PANADOL',
            jumlah: 2,
            totalHarga: 24000,
        },
        {
            id: 'TRX-030',
            tanggal: '2026-09-20',
            namaProduk: 'MINYAK BIMOLI',
            jumlah: 1,
            totalHarga: 37000,
        },
    ];
    getSemuaTransaksi() {
        return this.daftarTransaksi;
    }

    tambahTransaksi(p_id: string, p_tanggal: string, p_namaProduk: string, p_jumlah: number, p_totalHarga: number) {
        this.daftarTransaksi.push({
            id: p_id,
            tanggal: p_tanggal,
            namaProduk: p_namaProduk,
            jumlah: p_jumlah,
            totalHarga: p_totalHarga
        });
    }

    hapusTransaksi(index: number) {
        if (index >= 0 && index < this.daftarTransaksi.length) {
            this.daftarTransaksi.splice(index, 1);
        }
    }
}
