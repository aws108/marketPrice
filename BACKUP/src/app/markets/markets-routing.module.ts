import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarketsDetailComponent } from "./components/markets-detail/markets-detail.component";
import { MarketsComparisonComponent } from "./components/markets-comparison/markets-comparison.component";
import { MarketsLocationComponent } from "./components/markets-location/markets-location.component";
import { MarketsListComponent } from "./components/markets-list/markets-list.component";

const routes: Routes = [
    {
      path: '',
      component: MarketsListComponent,
      children: [
        { path: 'detail', component: MarketsDetailComponent },
        { path: 'comparison', component: MarketsComparisonComponent },
        { path: 'location', component: MarketsLocationComponent },
        { path: '**', redirectTo: '' },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class MarketsRoutingModule { }