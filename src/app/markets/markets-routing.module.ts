import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPageComponent } from './components/market-page.component';


// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'markets-page', component: MarketPageComponent }, // añadir el resto de componentes
//       { path: '**', redirectTo: 'markets-page' },
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list', // Redirige a 'markets-page' por defecto
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: MarketPageComponent
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
export class MarketsRoutingModule { }
