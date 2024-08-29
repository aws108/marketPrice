import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPageComponent } from './components/market-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'markets-list', component: MarketPageComponent }, // añadir el resto de componentes
      { path: '**', redirectTo: 'markets-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
