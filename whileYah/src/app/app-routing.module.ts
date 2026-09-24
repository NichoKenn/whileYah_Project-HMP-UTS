import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule) 
  },
  {
    path: 'produkdetail/:id',
    loadChildren: () => import('./produkdetail/produkdetail.module').then( m => m.ProdukdetailPageModule)
  },
  {
    path: 'produkbaru',
    loadChildren: () => import('./produkbaru/produkbaru.module').then( m => m.ProdukbaruPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'produkbaru',
    loadChildren: () => import('./produkbaru/produkbaru.module').then( m => m.ProdukbaruPageModule)
  },  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }