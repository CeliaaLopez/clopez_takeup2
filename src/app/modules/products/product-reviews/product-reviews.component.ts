import { Component, Input } from '@angular/core'
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent {
  @Input() selectedProduct?: Product
  @Input() ratingImage: string = ''
}
