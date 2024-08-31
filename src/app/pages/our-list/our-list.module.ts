import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurListPageRoutingModule } from './our-list-routing.module';

import { OurListPage } from './our-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OurListPageRoutingModule
  ],
  declarations: [OurListPage]
})
export class OurListPageModule {}
