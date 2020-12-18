import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

interface BudgetSchema {
  id: string;
  budget: number;
  maxbudget: number;
  color: string;
}

@Component({
  selector: 'app-hometable',
  templateUrl: './hometable.component.html',
  styleUrls: ['./hometable.component.scss'],
})
export class HometableComponent implements OnInit {
  budgetData: Observable<BudgetSchema[]>;

  data = [];

  public loggedInUserName: any;

  constructor(private _dataService: DataService) {
    this.loggedInUserName = this._dataService.loggedInUserName;
  }

  ngOnInit(): void {
    this._dataService
      .getBudgetData(this.loggedInUserName)
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
      });
  }
}
