import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsComparisonComponent } from './components/products-comparison/products-comparison.component';
import { ProductsHistoricalPriceComponent } from './components/products-historical-price/products-historical-price.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsComparisonComponent,
    ProductsHistoricalPriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProductsModule { }
