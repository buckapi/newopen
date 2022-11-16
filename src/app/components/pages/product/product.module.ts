import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
  NgxUsefulSwiperModule,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
