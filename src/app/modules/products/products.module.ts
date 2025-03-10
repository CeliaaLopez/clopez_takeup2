import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductsSimilarsComponent } from './products-similars/products-similars.component';
import { ComponentsModule } from '../components.module';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductShowComponent,
    ProductReviewsComponent,
    ProductsSimilarsComponent,
    ProductsListComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, ComponentsModule],
  exports: [
    ProductsComponent,
    ProductComponent,
    ProductShowComponent,
    ProductReviewsComponent,
    ProductsSimilarsComponent,
    ProductsListComponent,
  ],
})
export class ProductsModule {}
