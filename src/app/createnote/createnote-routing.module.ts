import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatenotePage } from './createnote.page';

const routes: Routes = [
  {
    path: '',
    component: CreatenotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatenotePageRoutingModule {}
