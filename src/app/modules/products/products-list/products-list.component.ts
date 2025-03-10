import { Component, Input } from '@angular/core';
import { ProductList } from 'src/app/models/product-list';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productsCast: ProductList[] = [];
  totalProducts = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsAdd().subscribe((data) => {
      this.productsCast = data;
      this.totalProducts = data.length;
    });
  }
}
