import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationUsersAddPageRoutingModule } from './administration-users-add-routing.module';

import { AdministrationUsersAddPage } from './administration-users-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationUsersAddPageRoutingModule
  ],
  declarations: [AdministrationUsersAddPage]
})
export class AdministrationUsersAddPageModule {}
