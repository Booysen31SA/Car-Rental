import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [500, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Vehicle';
  showYAxisLabel = true;
  yAxisLabel = 'Sales per vehicle';

  colorScheme = {
    domain: ['#51AE25',
             '#0000ff',
             '#ff66cc',
             '#ffff66',
             '#996600',
             '#003300',
             '#ff3399',
             '#66ff66',
             '#ff0000',
             '#cc00cc',
             '#993366',
             '#ff99cc',
             '#999966',
             '#666699',
             '#006666',
             '#993333',
             '#ffff00',
             '#00ffcc']
  };

  constructor(private api: ApiServiceService) {
  }


  ngOnInit() {
    this.random_Function();
  }

  random_Function() {
    const randomNumber = Math.floor(Math.random() * Math.floor(2));
    if ( randomNumber === 1) {
      this.Models_Sold();
    } else if (randomNumber === 0) {
      this.car_sales_category();
    }
  }

  Models_Sold() {
    this.xAxisLabel = 'Vehicle';
    this.yAxisLabel = 'Sales per vehicle';
    this.api.Models_Sold() .subscribe(( data: any) => {
      if (data.success) {
        this.single = data.results;
      }
    });
  }
  car_sales_category() {
    this.xAxisLabel = 'Category';
    this.yAxisLabel = 'Sales per category';
    this.api.car_sales_category() .subscribe(( data: any) => {
      if (data.success) {
        this.single = data.results;
      }
    });
  }
}
