import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurListAddPageRoutingModule } from './our-list-add-routing.module';

import { OurListAddPage } from './our-list-add.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OurListAddPageRoutingModule
  ],
  declarations: [OurListAddPage]
})
export class OurListAddPageModule {}
