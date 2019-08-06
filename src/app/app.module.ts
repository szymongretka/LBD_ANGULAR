import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseTrackingModule } from './expense-tracking/expense-tracking.module';
import { RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense-tracking/expense/expense.component';
import { CategoryTrackingModule } from './category-tracking/category-tracking.module';
import { CategoryComponent } from './category-tracking/category/category.component';
import { ExpenseDetailComponent } from './expense-tracking/expense-detail/expense-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ExpenseTrackingModule,
    CategoryTrackingModule,
    RouterModule.forRoot([
      {path: 'expenses', component: ExpenseComponent},
      {path: 'categories', component: CategoryComponent},
      {path: 'expenses/:id', component: ExpenseDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
