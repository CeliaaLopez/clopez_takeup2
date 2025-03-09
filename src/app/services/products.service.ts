import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { ProductList } from '../models/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: Product[] = [];
  private productsList: ProductList[] = [];

  private url = 'assets/data/products.json';
  private productsListSubject = new BehaviorSubject<ProductList[]>([]);
  private colorBtnAddMap = new Map<string, string>();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    if (this.data.length) {
      return of(this.data);
    }
    return this.http.get<Product[]>(this.url);
  }

  setData(data: Product[]): void {
    this.data = data;
  }

  getData(): Product[] {
    return this.data;
  }

  addProduct(product: Product): void {
    const findProduct = this.productsList.find(
      (p) => p.product === product.product && p.price === product.price
    );

    if (findProduct) {
      findProduct.quantity += 1;
    } else {
      this.productsList.push({ ...product, quantity: 1 });
    }
    this.productsListSubject.next(this.productsList);
    this.changeColorProductAdd(product);
  }

  changeColorProductAdd(product: Product): void {
    const productKey = `${product.product}-${product.price}`;
    const isProductAdded = this.productsList.find(
      (p) => p.product === product.product && p.price === product.price
    );

    if (isProductAdded) {
      this.colorBtnAddMap.set(productKey, 'danger');
    } else {
      this.colorBtnAddMap.set(productKey, 'secondary');
    }
  }

  getColorForProduct(product: Product): string {
    const productKey = `${product.product}-${product.price}`;
    return this.colorBtnAddMap.get(productKey) || 'secondary';
  }

  getProductsAdd(): Observable<ProductList[]> {
    return this.productsListSubject.asObservable();
  }

  getDefaultProduct(): Product {
    return {
      product: 'No disponemos de productos en stock',
      price: 0,
      currency: '€',
      rating: 0,
      description: '',
      favorite: false,
      similarProducts: [],
      reviews: [],
    };
  }
}
