import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[];
  selectedExpense: Expense;
  expenseService: ExpenseService;
  onSelectedExpense(expense: Expense): void {
    this.selectedExpense = expense;
  }
  //expense1: Expense = new Expense("my name isss", 200);


  constructor(expeseService: ExpenseService) { 
    this.expenseService = expeseService;
  }

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
  }

}
