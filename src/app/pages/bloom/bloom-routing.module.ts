import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloomPage } from './bloom.page';

const routes: Routes = [
  {
    path: '',
    component: BloomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloomPageRoutingModule {}
