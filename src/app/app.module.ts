import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { DateFormatInterceptor } from './date.interceptor';
import { ProductsListComponent } from './modules/products/products-list/products-list.component';

@NgModule({
  declarations: [AppComponent, ProductsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DateFormatInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
