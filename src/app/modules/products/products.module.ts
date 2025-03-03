import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductsSimilarsComponent } from './products-similars/products-similars.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductShowComponent,
    ProductReviewsComponent,
    ProductsSimilarsComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProductsComponent,
    ProductShowComponent,
    ProductReviewsComponent,
    ProductsSimilarsComponent,
  ],
})
export class ProductsModule {}
