import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationTaskEditPage } from './administration-task-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationTaskEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationTaskEditPageRoutingModule {}
