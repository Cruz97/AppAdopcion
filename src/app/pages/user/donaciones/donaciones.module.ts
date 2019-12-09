import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonacionesPageRoutingModule } from './donaciones-routing.module';

import { DonacionesPage } from './donaciones.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonacionesPageRoutingModule,
    ComponentsModule
  ],
  exports: [DonacionesPage],
  declarations: [DonacionesPage]
})
export class DonacionesPageModule {}
