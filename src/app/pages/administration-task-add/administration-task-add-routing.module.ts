import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationTaskAddPage } from './administration-task-add.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationTaskAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationTaskAddPageRoutingModule {}
