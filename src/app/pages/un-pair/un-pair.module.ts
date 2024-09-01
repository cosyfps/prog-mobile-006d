import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnPairPageRoutingModule } from './un-pair-routing.module';

import { UnPairPage } from './un-pair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnPairPageRoutingModule
  ],
  declarations: [UnPairPage]
})
export class UnPairPageModule {}
