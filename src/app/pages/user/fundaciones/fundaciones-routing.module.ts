import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundacionesPage } from './fundaciones.page';
import { ComponentsModule } from '../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FundacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class FundacionesPageRoutingModule {}
