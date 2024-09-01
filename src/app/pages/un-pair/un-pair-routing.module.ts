import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnPairPage } from './un-pair.page';

const routes: Routes = [
  {
    path: '',
    component: UnPairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnPairPageRoutingModule {}
