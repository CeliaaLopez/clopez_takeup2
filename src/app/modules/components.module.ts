import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from './products/mainProducts/main.component';
import { ProductsModule } from './products/products.module';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';
import { MoreInfoComponent } from './home/more-info/more-info.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    MainHomeComponent,
    AboutUsComponent,
    SubscribeComponent,
    MoreInfoComponent,
  ],
  imports: [CommonModule, ProductsModule, RouterModule],
  exports: [NavbarComponent, MainComponent, ProductsModule],
})
export class ComponentsModule {}
