import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './aboutus-routing.module';
import { InfoUsComponent } from './info-us/info-us.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ComponentsModule } from '../components.module';
import { AboutUsComponent } from './aboutus.component';

@NgModule({
  declarations: [AboutUsComponent, InfoUsComponent, SubscribeComponent, MoreInfoComponent],
  imports: [CommonModule, AboutUsRoutingModule, ComponentsModule],
  exports: [AboutUsComponent],
})
export class AboutusModule {}
