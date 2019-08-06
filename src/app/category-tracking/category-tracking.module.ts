import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryTrackingRoutingModule } from './category-tracking-routing.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryTrackingRoutingModule],
  exports: [CategoryComponent]
})
export class CategoryTrackingModule { }
