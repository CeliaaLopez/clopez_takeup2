import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';
import { ProductList } from 'src/app/models/product-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsCast: ProductList[] = [];
  selectedProduct!: Product;
  filteredProducts: Product[] = [];
  selectedProductIndex: number = 0;
  loading = true;
  colorBtnAdd = 'secondary';
  background = '';
  textColor = '';
  colorBottonDelete = 'secondary';
  colorBottonReview = 'secondary';
  colorBottonPrice = 'secondary';
  totalProducts = 0;
  showCart = false;

  private colorBtnAddSubscription: Subscription = Subscription.EMPTY;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = [...this.products];
      this.loading = false;
      if (this.products.length > 0) {
        this.selectedProduct = this.products[0];
        this.updateBackground();
      }
    });
    this.productsService.getProductsAdd().subscribe((data) => {
      this.totalProducts = data.length;
      this.productsCast = data;
      console.log(this.totalProducts);
      this.updateButtonColors();
    });
  }

  updateButtonColors(): void {
    this.productsCast.forEach((product) => {
      this.colorBtnAdd = this.productsService.getColorForProduct(product);
    });
  }

  selectProduct(index: number): void {
    this.selectedProductIndex = index;
    this.selectedProduct = this.filteredProducts[index];
    this.updateBackground();
    this.colorBtnAdd = this.productsService.getColorForProduct(
      this.selectedProduct
    );
  }

  addProduct(index: number): void {
    const productToAdd = this.productsService.getData()[index];
    this.productsService.addProduct(productToAdd);
    this.colorBtnAdd = this.productsService.getColorForProduct(productToAdd);
    this.totalProducts = this.productsCast.length;
  }

  updateBackground(): void {
    if (this.selectedProduct.favorite) {
      this.background = 'dark';
      this.textColor = 'white';
      this.colorBottonDelete = 'light';
    } else {
      this.background = 'light';
      this.textColor = 'dark';
      this.colorBottonDelete = 'secondary';
    }
  }

  filterByPrice(): void {
    this.filteredProducts = this.products.filter(
      (product) => product.price < 15
    );
    this.colorBottonPrice = 'dark';
    this.colorBottonReview = 'secondary';
  }

  filterByReview(): void {
    this.filteredProducts = this.products.filter(
      (product) => product.reviews.length !== 0
    );
    this.colorBottonPrice = 'secondary';
    this.colorBottonReview = 'dark';
  }

  resetFilter(): void {
    this.filteredProducts = [...this.products];
    this.colorBottonPrice = 'secondary';
    this.colorBottonReview = 'secondary';
  }

  productFavorite(index: number): void {
    const productFav = this.products[index];
    if (productFav.favorite) {
      this.background = 'light';
      this.textColor = 'dark';
      this.colorBottonDelete = 'secondary';
      this.products[index].favorite = false;
    } else {
      this.background = 'dark';
      this.textColor = 'white';
      this.colorBottonDelete = 'light';
      this.products[index].favorite = true;
    }
  }

  getRatingImage(rating: number): string {
    if (rating > 3 && rating < 4) {
      return 'assets/3.5.png';
    } else if (rating > 4 && rating < 5) {
      return 'assets/4.5.png';
    } else if (rating > 2 && rating < 3) {
      return 'assets/2.5.png';
    } else {
      return `assets/${rating}.png`;
    }
  }

  deleteProduct(index: number): void {
    const productToDelete = this.products[index];
    this.products.splice(index, 1);
    this.filteredProducts.splice(index, 1);
    if (this.selectedProduct === productToDelete) {
      this.selectedProduct =
        this.products.length > 0
          ? this.products[0]
          : this.productsService.getDefaultProduct();
      this.selectedProduct =
        this.filteredProducts.length > 0
          ? this.filteredProducts[0]
          : this.productsService.getDefaultProduct();
    }
  }
}
