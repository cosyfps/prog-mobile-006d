import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationUsersEditPage } from './administration-users-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationUsersEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationUsersEditPageRoutingModule {}
