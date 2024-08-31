import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayPageRoutingModule } from './today-routing.module';

import { TodayPage } from './today.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TodayPageRoutingModule
  ],
  declarations: [TodayPage,]
})
export class TodayPageModule {}
