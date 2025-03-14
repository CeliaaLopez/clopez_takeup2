import { Component, Input, Output, EventEmitter } from '@angular/core'
import type { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() selectedProduct?: Product
  @Input() selectedProductIndex?: number
  @Input() colorBottonReview?: string
  @Input() colorBottonPrice?: string
  @Input() filteredProducts: Product[] = []
  @Output() productSelected = new EventEmitter<number>()
  @Output() filterPrice = new EventEmitter<void>()
  @Output() filterReview = new EventEmitter<void>()
  @Output() resetFilter = new EventEmitter<void>()

  selectProduct (index: number): void {
    this.productSelected.emit(index)
  }

  filterByPrice (): void {
    this.filterPrice.emit()
  }

  filterByReview (): void {
    this.filterReview.emit()
  }

  resetAllFilters (): void {
    this.resetFilter.emit()
  }
}
