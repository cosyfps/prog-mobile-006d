import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationTaskAddPageRoutingModule } from './administration-task-add-routing.module';

import { AdministrationTaskAddPage } from './administration-task-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationTaskAddPageRoutingModule
  ],
  declarations: [AdministrationTaskAddPage]
})
export class AdministrationTaskAddPageModule {}
