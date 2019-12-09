import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  // {
  //   path: 'inicio',
  //   loadChildren: () => import('./pages/user/inicio/inicio.module').then( m => m.InicioPageModule)
  // },
  {
    path: 'user/fundaciones',
    loadChildren: () => import('./pages/user/fundaciones/fundaciones.module').then( m => m.FundacionesPageModule)
  },
  {
    path: 'user/mascotas',
    loadChildren: () => import('./pages/user/mascotas/mascotas.module').then( m => m.MascotasPageModule)
  },
  {
    path: 'user/solicitudes',
    loadChildren: () => import('./pages/user/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'user/donaciones',
    loadChildren: () => import('./pages/user/donaciones/donaciones.module').then( m => m.DonacionesPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./pages/acerca/acerca.module').then( m => m.AcercaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
