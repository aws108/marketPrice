import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsListComponent } from './components/markets-list/markets-list.component';
import { MarketsDetailComponent } from './components/markets-detail/markets-detail.component';
import { MarketsComparisonComponent } from './components/markets-comparison/markets-comparison.component';
import { MarketsLocationComponent } from './components/markets-location/markets-location.component';
import { MarketsRoutingModule } from './markets-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MarketsListComponent,
    MarketsDetailComponent,
    MarketsComparisonComponent,
    MarketsLocationComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class MarketsModule { }