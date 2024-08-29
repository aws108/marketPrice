import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductsDetailComponent } from "./components/products-detail/products-detail.component";
import { ProductsComparisonComponent } from "./components/products-comparison/products-comparison.component";
import { ProductsHistoricalPriceComponent } from "./components/products-historical-price/products-historical-price.component";

const routes: Routes = [
    {
      path: '',
      component: ProductsListComponent,
      children: [
        { path: 'detail', component: ProductsDetailComponent },
        { path: 'comparison', component: ProductsComparisonComponent },
        { path: 'historical-price', component: ProductsHistoricalPriceComponent },
        { path: '**', redirectTo: '' },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProductsRoutingModule { }