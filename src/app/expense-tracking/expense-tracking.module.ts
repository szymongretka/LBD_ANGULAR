import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseService } from '../services/expense.service'
import { FormsModule } from '@angular/forms';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';




@NgModule({
  declarations: [ExpenseComponent, ExpenseDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [ExpenseComponent, ExpenseDetailComponent],
  providers: [ExpenseService]
})
export class ExpenseTrackingModule { }
