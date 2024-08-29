import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProductPageComponent }, //añadir el resto de componentes
      { path: '**', redirectTo: 'product' },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
