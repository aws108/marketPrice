import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './components/product-page.component';

import { SharedModule } from '../shared/shared.module';
import { ProductsComparisonComponent } from './components/products-comparison/products-comparison.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsHistoricalPriceComponent } from './components/products-historical-price/products-historical-price.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsComparisonComponent,
    ProductsDetailComponent,
    ProductsHistoricalPriceComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    SharedModule,
  ]
})
export class ProductsModule { }
