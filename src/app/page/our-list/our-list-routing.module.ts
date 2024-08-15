import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurListPage } from './our-list.page';

const routes: Routes = [
  {
    path: '',
    component: OurListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurListPageRoutingModule {}
