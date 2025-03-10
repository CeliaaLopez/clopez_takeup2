import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { routeGuard } from './guarda/guarda.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./modules/aboutus/aboutus.module').then((m) => m.AboutusModule),
  },
  {
    path: 'guarda',
    loadChildren: () =>
      import('./modules/guarda/guarda.module').then((m) => m.GuardaModule),
    canActivate: [routeGuard],
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
