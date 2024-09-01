import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurListTaskPageRoutingModule } from './our-list-task-routing.module';

import { OurListTaskPage } from './our-list-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurListTaskPageRoutingModule
  ],
  declarations: [OurListTaskPage]
})
export class OurListTaskPageModule {}
