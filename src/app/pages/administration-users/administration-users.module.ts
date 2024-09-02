import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationUsersPageRoutingModule } from './administration-users-routing.module';

import { AdministrationUsersPage } from './administration-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationUsersPageRoutingModule
  ],
  declarations: [AdministrationUsersPage]
})
export class AdministrationUsersPageModule {}
