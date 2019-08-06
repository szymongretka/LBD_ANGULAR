import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  retrievedId: number;
  route: ActivatedRoute;

  constructor(route: ActivatedRoute) { 
    this.route = this.route;
  }

  ngOnInit() {
    this.retrievedId = +this.route.snapshot.paramMap.get('id');
  }

}
