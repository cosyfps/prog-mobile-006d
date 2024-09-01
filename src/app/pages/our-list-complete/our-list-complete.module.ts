import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurListCompletePageRoutingModule } from './our-list-complete-routing.module';

import { OurListCompletePage } from './our-list-complete.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OurListCompletePageRoutingModule
  ],
  declarations: [OurListCompletePage]
})
export class OurListCompletePageModule {}
