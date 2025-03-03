import { Component, Input } from '@angular/core'
import type { Product } from '../../../models/product';

@Component({
  selector: 'app-products-similars',
  templateUrl: './products-similars.component.html',
  styleUrls: ['./products-similars.component.scss']
})
export class ProductsSimilarsComponent {
  @Input() selectedProduct?: Product
  @Input() ratingImage: string = ''
}
