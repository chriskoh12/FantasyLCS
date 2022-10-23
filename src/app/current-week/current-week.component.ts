import { Component, OnInit } from '@angular/core';
import { label } from 'aws-amplify';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.css']
})
export class CurrentWeekComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    
    labels: [ 'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'],
    datasets: [
    { borderColor: 'black',
      borderWidth: 2,
      borderRadius: 100,
      data: [ 65, 40, 18, 81, 56, 55 ], 
      label: 'Highest',
    }
    
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    backgroundColor: 'rgba(153, 102, 255, 0.5)',
  };

  

  constructor() { }

  ngOnInit(): void {
  }

}
