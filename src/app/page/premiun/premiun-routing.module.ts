import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiunPage } from './premiun.page';

const routes: Routes = [
  {
    path: '',
    component: PremiunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiunPageRoutingModule {}
