import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationUsersAddPage } from './administration-users-add.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationUsersAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationUsersAddPageRoutingModule {}
