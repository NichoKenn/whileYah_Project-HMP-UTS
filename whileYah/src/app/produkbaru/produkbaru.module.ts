import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { ProdukbaruPageRoutingModule } from './produkbaru-routing.module';
import { ProdukbaruPage } from './produkbaru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukbaruPageRoutingModule
  ],
  declarations: [ProdukbaruPage]
})
export class ProdukbaruPageModule {}