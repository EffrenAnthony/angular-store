import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,

  ],
  imports: [
    HomeRoutingModule,
    // siempre que modularizamos es necesario tener este modulo para tambien tener las directivas de angular
    CommonModule,
    SharedModule
  ]
})
export class HomeModule{

}
