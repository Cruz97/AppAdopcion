import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotasPageRoutingModule } from './mascotas-routing.module';

import { MascotasPage } from './mascotas.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MascotasPage]
})
export class MascotasPageModule {}
