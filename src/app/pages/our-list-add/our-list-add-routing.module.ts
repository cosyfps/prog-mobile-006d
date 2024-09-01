import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurListAddPage } from './our-list-add.page';

const routes: Routes = [
  {
    path: '',
    component: OurListAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurListAddPageRoutingModule {}
