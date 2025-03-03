import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { MainHomeComponent } from './modules/home/main-home/main-home.component';
import { MainComponent } from './modules/products/mainProducts/main.component';

const routes: Routes = [
  { path: '', component: MainHomeComponent },
  { path: 'products', component: MainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
