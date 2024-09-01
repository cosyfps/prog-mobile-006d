import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloomPageRoutingModule } from './bloom-routing.module';

import { BloomPage } from './bloom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloomPageRoutingModule
  ],
  declarations: [BloomPage]
})
export class BloomPageModule {}
