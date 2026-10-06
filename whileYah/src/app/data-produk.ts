import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataProduk {

    produk = [
        {
            id: "P1",
            nama: "BERAS SUMO",
            url: "https://image.astronauts.cloud/product-images/2026/7/SumoMerahBerasFortif_351ab95e-5b60-46d4-9745-1b57cc434b3e_900x900.jpg",
            stok: 15,
            harga_beli: 90000,
            harga_jual: 98000,
            kategori: "Sembako"
        },
        {
            id: "P2",
            nama: "MINYAK BIMOLI",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0883838/bimoli_bimoli-klasik-pouch-minyak-goreng--2000-ml-6-pcs-_full06.jpg",
            stok: 0,
            harga_beli: 33000,
            harga_jual: 37000,
            kategori: "Sembako"
        },
        {
            id: "P3",
            nama: "GULA GULAKU",
            url: "https://media.monotaro.id/mid01/big/Perlengkapan%20Dapur%20%26%20Horeka/Makanan/Gula/Gula%20Pasir/Gulaku%20Gula%20Pasir%20Kuning%20(Sugar)/Gulaku%20Gula%20Pasir%20Kuning%20(Sugar)%201kg%201pc/1yS000003070-8.jpg",
            stok: 20,
            harga_beli: 11000,
            harga_jual: 13000,
            kategori: "Sembako"
        },
        {
            id: "P4",
            nama: "WAFER TANGO",
            url: "https://coreimages.lottemart.co.id/ord/06/8c3c1434-da7f-4006-8d1f-fe4a7d6010b3.jpeg",
            stok: 25,
            harga_beli: 18000,
            harga_jual: 22000,
            kategori: "Camilan"
        },
        {
            id: "P5",
            nama: "BISKUIT KHONG GUAN",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//690/khong-guan_khong-guan-biscuit--1600-g-_full02.jpg",
            stok: 5,
            harga_beli: 45000,
            harga_jual: 50000,
            kategori: "Camilan"
        },
        {
            id: "P6",
            nama: "KACANG GARUDA",
            url: "https://image.astronauts.cloud/product-images/2026/7/ArchivoBlack19818cd_becd126d-ffe6-4841-be59-cc10597fb34d_900x900.jpg",
            stok: 0,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "Camilan"
        },
        {
            id: "P7",
            nama: "BODREX",
            url: "https://lifepack.id/images/uploads/2021/02/rug-1614236088278-3.jpeg.0x0.jpg.webp",
            stok: 18,
            harga_beli: 8000,
            harga_jual: 10000,
            kategori: "Obat"
        },
        {
            id: "P8",
            nama: "PANADOL",
            url: "https://d3bbrrd0qs69m4.cloudfront.net/images/product/large/apotek_online_k24klik_20260629030540359225_Panadol-Biru.jpg",
            stok: 20,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "Obat"
        },
        {
            id: "P9",
            nama: "OSKADON",
            url: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/8/12/126c7491-007c-4662-90dc-da985df8665f.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
            stok: 23,
            harga_beli: 6500,
            harga_jual: 8000,
            kategori: "Obat"
        },
        {
            id: "P10",
            nama: "LE MINERALE",
            url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1088855000-a&w=1920&q=75",
            stok: 25,
            harga_beli: 5000,
            harga_jual: 6000,
            kategori: "Minuman"
        },
        {
            id: "P11",
            nama: "SPRITE",
            url: "https://minumjek.com/cdn/shop/files/Minumjek_Sprite_Can_250ml-bottle.png?v=1778292871",
            stok: 10,
            harga_beli: 4000,
            harga_jual: 5000,
            kategori: "Minuman"
        },
        {
            id: "P12",
            nama: "KRATINGDAENG",
            url: "https://coreimages.lottemart.co.id/ord/06/1083902000-a",
            stok: 0,
            harga_beli: 12500,
            harga_jual: 15000,
            kategori: "Minuman"
        },
        {
            id: "P13",
            nama: "SABUN EKONOMI",
            url: "",
            stok: 20,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "Kebersihan"
        },
        {
            id: "P14",
            nama: "SABUN LIFEBUOY",
            url: "https://www.mandjur.co.id/cdn/shop/files/Lifebuoy-Total-10-500-mL-New-Pack.webp?v=1784532831",
            stok: 15,
            harga_beli: 22000,
            harga_jual: 25000,
            kategori: "Kebersihan"
        },
        {
            id: "P15",
            nama: "SHAMPOO PANTENE",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-157416833/pantene_pantene-shp-halus-lembut-pump-400-ml_full01.jpg",
            stok: 5,
            harga_beli: 28000,
            harga_jual: 32000,
            kategori: "Kebersihan"
        },
    ];

    getSemuaProduk() {
        return this.produk;
    }

    tambahProduk(p_id: string, p_nama: string, p_url: string, p_stok: number, p_harga_beli: number, p_harga_jual: number, p_kategori: string) {
        let isExist = false;
        for (let p of this.produk) {
            if (p.id === p_id) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            return false;
        }
        this.produk.push({
            id: p_id,
            nama: p_nama,
            url: p_url,
            stok: p_stok,
            harga_beli: p_harga_beli,
            harga_jual: p_harga_jual,
            kategori: p_kategori
        });
        return true;
    }

    editProduk(index: number, p_nama: string, p_url: string, p_stok: number, p_harga_beli: number, p_harga_jual: number, p_kategori: string) {
        if (this.produk[index]) {
            this.produk[index].nama = p_nama;
            this.produk[index].url = p_url;
            this.produk[index].stok = p_stok;
            this.produk[index].harga_beli = p_harga_beli;
            this.produk[index].harga_jual = p_harga_jual;
            this.produk[index].kategori = p_kategori;
        }
    }

}