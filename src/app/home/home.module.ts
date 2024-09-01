import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
