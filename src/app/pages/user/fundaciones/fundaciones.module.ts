import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundacionesPageRoutingModule } from './fundaciones-routing.module';

import { FundacionesPage } from './fundaciones.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundacionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FundacionesPage]
})
export class FundacionesPageModule {}
