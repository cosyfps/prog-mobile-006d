import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationTaskEditPageRoutingModule } from './administration-task-edit-routing.module';

import { AdministrationTaskEditPage } from './administration-task-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationTaskEditPageRoutingModule
  ],
  declarations: [AdministrationTaskEditPage]
})
export class AdministrationTaskEditPageModule {}
