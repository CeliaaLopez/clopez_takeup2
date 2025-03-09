import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';

@Injectable()
export class DateFormatInterceptor implements HttpInterceptor {
  constructor(private productsService: ProductsService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      map((event) => {
        if (event instanceof HttpResponse && Array.isArray(event.body)) {
          const transformedProducts = this.transformDates(event.body);
          this.productsService.setData(transformedProducts);
          return event.clone({ body: transformedProducts });
        }
        return event;
      })
    );
  }

  private transformDates(products: Product[]): Product[] {
    return products.map((product) => ({
      ...product,
      reviews:
        product.reviews?.map((review) => ({
          ...review,
          date: this.parseDate(review.date),
        })) ?? product.reviews,
    }));
  }
  private parseDate(value: string | Date): Date {
    if (value instanceof Date) {
      return value;
    }

    const regex = /^\d{2}-\d{2}-\d{4}, \d{2}:\d{2}$/;
    if (!regex.test(value)) return new Date();

    const [datePart, timePart] = value.split(', ');
    const [day, month, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }
}
