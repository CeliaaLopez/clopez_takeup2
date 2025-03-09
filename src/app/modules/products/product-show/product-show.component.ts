import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
})
export class ProductShowComponent {
  @Input() selectedProduct?: Product;
  @Input() selectedProductIndex?: number;
  @Input() ratingImage: string = '';
  @Input() colorBtnAdd: string = '';
  @Input() colorBottonDelete?: string;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() addProduct = new EventEmitter<number>();
  @Output() productFavorite = new EventEmitter<number>();

  deleteProductSelected(index: number | undefined): void {
    if (index !== undefined) {
      this.deleteProduct.emit(index);
    }
  }

  addProductSelected(index: number | undefined): void {
    if (index !== undefined) {
      this.addProduct.emit(index);
    }
  }

  markProductFavorite(): void {
    if (this.selectedProductIndex !== undefined) {
      this.productFavorite.emit(this.selectedProductIndex);
    }
  }
}
