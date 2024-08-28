import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurListPageRoutingModule } from './our-list-routing.module';

import { OurListPage } from './our-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurListPageRoutingModule
  ],
  declarations: [OurListPage]
})
export class OurListPageModule {}
