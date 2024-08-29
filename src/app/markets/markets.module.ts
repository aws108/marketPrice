import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MarketPageComponent } from './components/market-page.component';
import { MarketsRoutingModule } from './markets-routing.module';


@NgModule({
  declarations: [
    MarketPageComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    SharedModule,
  ]
})
export class MarketsModule { }
