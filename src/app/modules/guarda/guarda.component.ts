import { Component } from '@angular/core';
import { ProductList } from 'src/app/models/product-list';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-guarda',
  templateUrl: './guarda.component.html',
  styleUrls: ['./guarda.component.scss']
})
export class GuardaComponent {
  productsCast: ProductList[] = [];
  totalProducts: number = 0 ;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductsAdd().subscribe((data) => {
      this.productsCast = data;
      this.totalProducts = data.length;
    })
  }
}
