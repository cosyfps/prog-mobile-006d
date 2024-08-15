import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourInfoPageRoutingModule } from './your-info-routing.module';

import { YourInfoPage } from './your-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourInfoPageRoutingModule
  ],
  declarations: [YourInfoPage]
})
export class YourInfoPageModule {}
