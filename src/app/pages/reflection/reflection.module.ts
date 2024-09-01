import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReflectionPageRoutingModule } from './reflection-routing.module';

import { ReflectionPage } from './reflection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReflectionPageRoutingModule
  ],
  declarations: [ReflectionPage]
})
export class ReflectionPageModule {}
