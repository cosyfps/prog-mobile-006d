import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationTaskPageRoutingModule } from './administration-task-routing.module';

import { AdministrationTaskPage } from './administration-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationTaskPageRoutingModule
  ],
  declarations: [AdministrationTaskPage]
})
export class AdministrationTaskPageModule {}
