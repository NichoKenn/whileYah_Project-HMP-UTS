import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataProduk {

    produk = [
        {
            nama: "BERAS SUMO",
            url: "https://image.astronauts.cloud/product-images/2026/7/SumoMerahBerasFortif_351ab95e-5b60-46d4-9745-1b57cc434b3e_900x900.jpg",
            stok: 15,
            harga_beli: 90000,
            harga_jual: 98000,
            kategori: "sembako"
        },
        {
            nama: "MINYAK BIMOLI",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0883838/bimoli_bimoli-klasik-pouch-minyak-goreng--2000-ml-6-pcs-_full06.jpg",
            stok: 0,
            harga_beli: 33000,
            harga_jual: 37000,
            kategori: "sembako"
        },
        {
            nama: "GULA GULAKU",
            url: "https://media.monotaro.id/mid01/big/Perlengkapan%20Dapur%20%26%20Horeka/Makanan/Gula/Gula%20Pasir/Gulaku%20Gula%20Pasir%20Kuning%20(Sugar)/Gulaku%20Gula%20Pasir%20Kuning%20(Sugar)%201kg%201pc/1yS000003070-8.jpg",
            stok: 20,
            harga_beli: 11000,
            harga_jual: 13000,
            kategori: "sembako"
        },
        {
            nama: "WAFER TANGO",
            url: "https://coreimages.lottemart.co.id/ord/06/8c3c1434-da7f-4006-8d1f-fe4a7d6010b3.jpeg",
            stok: 25,
            harga_beli: 18000,
            harga_jual: 22000,
            kategori: "camilan"
        },
        {
            nama: "BISKUIT KHONG GUAN",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//690/khong-guan_khong-guan-biscuit--1600-g-_full02.jpg",
            stok: 5,
            harga_beli: 45000,
            harga_jual: 50000,
            kategori: "camilan"
        },
        {
            nama: "KACANG GARUDA",
            url: "https://image.astronauts.cloud/product-images/2026/7/ArchivoBlack19818cd_becd126d-ffe6-4841-be59-cc10597fb34d_900x900.jpg",
            stok: 0,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "camilan"
        },
        {
            nama: "BODREX",
            url: "https://lifepack.id/images/uploads/2021/02/rug-1614236088278-3.jpeg.0x0.jpg.webp",
            stok: 18,
            harga_beli: 8000,
            harga_jual: 10000,
            kategori: "obat"
        },
        {
            nama: "PANADOL",
            url: "https://d3bbrrd0qs69m4.cloudfront.net/images/product/large/apotek_online_k24klik_20260629030540359225_Panadol-Biru.jpg",
            stok: 20,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "obat"
        },
        {
            nama: "OSKADON",
            url: "https://d2qjkwm11akmwu.cloudfront.net/products/399190_21-3-2023_14-22-21.webp",
            stok: 23,
            harga_beli: 6500,
            harga_jual: 8000,
            kategori: "obat"
        },
        {
            nama: "LE MINERALE",
            url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1088855000-a&w=1920&q=75",
            stok: 25,
            harga_beli: 5000,
            harga_jual: 6000,
            kategori: "minuman"
        },
        {
            nama: "SPRITE",
            url: "https://minumjek.com/cdn/shop/files/Minumjek_Sprite_Can_250ml-bottle.png?v=1778292871",
            stok: 10,
            harga_beli: 4000,
            harga_jual: 5000,
            kategori: "minuman"
        },
        {
            nama: "KRATINGDAENG",
            url: "https://coreimages.lottemart.co.id/ord/06/1083902000-a",
            stok: 0,
            harga_beli: 12500,
            harga_jual: 15000,
            kategori: "minuman"
        },
        {
            nama: "SABUN EKONOMI",
            url: "https://media.monotaro.id/mid01/big/Alat%20%26%20Kebutuhan%20Kebersihan/Deterjen/Deterjen%2FSabun%20Cuci%20Baju/Ekonomi%20Sabun%20Krim%20Anti%20Noda/8zP101549323-6.jpg",
            stok: 20,
            harga_beli: 10000,
            harga_jual: 12000,
            kategori: "kebersihan"
        },
        {
            nama: "SABUN LIFEBUOY",
            url: "https://www.mandjur.co.id/cdn/shop/files/Lifebuoy-Total-10-500-mL-New-Pack.webp?v=1784532831",
            stok: 15,
            harga_beli: 22000,
            harga_jual: 25000,
            kategori: "kebersihan"
        },
        {
            nama: "SHAMPOO PANTENE",
            url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-157416833/pantene_pantene-shp-halus-lembut-pump-400-ml_full01.jpg",
            stok: 5,
            harga_beli: 28000,
            harga_jual: 32000,
            kategori: "kebersihan"
        },
    ];
}
