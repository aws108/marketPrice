import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MarketPageComponent } from './components/market-page.component';
import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComparisonComponent } from './components/markets-comparison/markets-comparison.component';
import { MarketsDetailComponent } from './components/markets-detail/markets-detail.component';
import { MarketsListComponent } from './components/markets-list/markets-list.component';
import { MarketsLocationComponent } from './components/markets-location/markets-location.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MarketPageComponent,
    MarketsComparisonComponent,
    MarketsDetailComponent,
    MarketsListComponent,
    MarketsLocationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MarketsRoutingModule,
    SharedModule,
  ]
})
export class MarketsModule { }
