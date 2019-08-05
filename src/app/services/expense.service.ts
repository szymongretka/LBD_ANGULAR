import { Injectable, OnInit } from '@angular/core';
import { Expense } from '../expense-tracking/expense/expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService implements OnInit{

  expenses: Expense[] = [
    {id: 1, name: "FirstOne", amount: 200},
    {id: 2, name: "SecondOne", amount: 300},
    {id: 3, name: "ThirdOne", amount: 400}
  ];

  getExpenses(): Expense[] {
    return this.expenses;
  }

  constructor() { }
  
  ngOnInit() {
    this.getExpenses;
  }
}
