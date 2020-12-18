import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dualbar',
  templateUrl: './dualbar.component.html',
  styleUrls: ['./dualbar.component.scss']
})
export class DualbarComponent implements OnInit {

  chartOptions = {
    responsive: true
  }

  labels = [];

  chartData = [
    {
      label: 'Current Budget',
      data: []  // load budget values
    },
    {
      label: 'Maximum Budget',
      data: [] // load maximum budget values
    }
  ];

  colors = [
    {
      backgroundColor: 'rgb(128, 0, 0)'
    },
    {
      backgroundColor: 'rgba(0, 118, 255, 0.8)'
    }
  ]

  onChartClick(event) {
    console.log(event);
  }

  public loggedInUserName:any;

  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngOnInit(): void {
    // Making the subscribe call for the first pie chart. Here the value is fetched from data source.
    //The data.service file has the handling for the API call.
    this.loggedInUserName = this._dataService.loggedInUserName;
    this._dataService.getBudgetData(this.loggedInUserName)
    .subscribe((res: any) => {
      console.log(res[0]);
      for (let i = 0; i < res.length; i++) {

        this.chartData[0].data[i] = res[i].budget;
        this.chartData[1].data[i] = res[i].maxbudget;
        this.labels[i] = res[i].title;

      }
    });
    }
}
