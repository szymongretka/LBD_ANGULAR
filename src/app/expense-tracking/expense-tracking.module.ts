import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseService } from '../services/expense.service'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ExpenseComponent],
  imports: [CommonModule, FormsModule],
  exports: [ExpenseComponent],
  providers: [ExpenseService]
})
export class ExpenseTrackingModule { }
