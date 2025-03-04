import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardaRoutingModule } from './guarda-routing.module';
import { GuardaComponent } from './guarda.component';
import { ComponentsModule } from '../components.module';

@NgModule({
  declarations: [GuardaComponent],
  imports: [CommonModule, GuardaRoutingModule, ComponentsModule],
})
export class GuardaModule {}
