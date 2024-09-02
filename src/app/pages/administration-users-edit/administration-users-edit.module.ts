import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationUsersEditPageRoutingModule } from './administration-users-edit-routing.module';

import { AdministrationUsersEditPage } from './administration-users-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationUsersEditPageRoutingModule
  ],
  declarations: [AdministrationUsersEditPage]
})
export class AdministrationUsersEditPageModule {}
