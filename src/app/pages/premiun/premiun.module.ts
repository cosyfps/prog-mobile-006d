import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiunPageRoutingModule } from './premiun-routing.module';

import { PremiunPage } from './premiun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiunPageRoutingModule
  ],
  declarations: [PremiunPage]
})
export class PremiunPageModule {}
