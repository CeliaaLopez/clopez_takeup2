import { Component, Input, Output, EventEmitter } from '@angular/core'
import type { Product } from '../../../models/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent {
  @Input() selectedProduct?: Product
  @Input() selectedProductIndex?: number
  @Input() colorBottonDelete?: string
  @Output() deleteProduct = new EventEmitter<number>()
  @Output() productFavorite = new EventEmitter<number>()
  @Input() ratingImage: string = ''

  deleteProductSelected (index: number | undefined): void {
    if (index !== undefined) {
      this.deleteProduct.emit(index)
    }
  }

  markProductFavorite (): void {
    if (this.selectedProductIndex !== undefined) {
      this.productFavorite.emit(this.selectedProductIndex)
    }
  }
}
