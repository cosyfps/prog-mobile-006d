import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurListTaskPage } from './our-list-task.page';

const routes: Routes = [
  {
    path: '',
    component: OurListTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurListTaskPageRoutingModule {}
