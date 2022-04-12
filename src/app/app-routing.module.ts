import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'add', loadChildren: () => import('./pages/add/add.module').then(m => m.AddModule) },
{ path: 'delete', loadChildren: () => import('./pages/delete/delete.module').then(m => m.DeleteModule) },
{ path: 'update', loadChildren: () => import('./pages/update/update.module').then(m => m.UpdateModule)  },
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
