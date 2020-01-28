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
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

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
    this.Models_Sold();
  }

  Models_Sold() {
    this.api.Models_Sold() .subscribe(( data: any) => {
      if (data.success) {
        this.single = data.results;
        console.log(this.single);
      }
    });
  }
}
