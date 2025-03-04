import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { GuardaComponent } from './guarda.component';
import { routeGuard } from 'src/app/guarda/guarda.guard';
const routes: Routes = [
  {
    path: '',
    component: GuardaComponent,
    canActivate: [routeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardaRoutingModule {}
