import { Component } from '@angular/core';
import { ProductList } from 'src/app/models/product-list';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutUsComponent {
  productsCast: ProductList[] = [];
  totalProducts: number = 0;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsAdd().subscribe((data) => {
      this.productsCast = data;
      this.totalProducts = data.length;
    })
  }
}
