import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page.component';

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'products-page', component: ProductPageComponent }, //añadir el resto de componentes
//       { path: '**', redirectTo: 'products-page' },
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProductPageComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
