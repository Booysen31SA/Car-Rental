import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  single: any[];
  view: any[] = [500, 500];

  // options
  legend  = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['RED']
  };

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
     this.SalesPerMonth();
  }

  SalesPerMonth() {
    this.api.SalesPerMonth() .subscribe((data: any) => {

      if (data.name === 'Sales per Month') {
        this.yAxisLabel = data.name;
        this.xAxisLabel = data.SalesYear;

        this.single = data.results;
      }
    });
  }
}
