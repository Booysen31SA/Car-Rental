import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  single: any[]; //data
  view: any[] = [500, 400]; //postion

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

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

  constructor(private api: ApiServiceService) {}

  ngOnInit() {
    this.random_Function();
  }

  random_Function() {
    let randomNumber = Math.floor(Math.random() * Math.floor(2));
    if ( randomNumber === 1) {
      this.Manual_VS_Automatic();
    } else if (randomNumber === 0) {
      this.Outstanding_Vs_Paid();
    }
  }

  Manual_VS_Automatic() {
    this.api.Manual_VS_Automatic() .subscribe(( data: any) => {
      if (data.success) {
        this.single = data.results;
      }
    });
  }

  Outstanding_Vs_Paid() {
    this.api.Outstanding_Vs_Paid() .subscribe(( data: any) => {
      if (data.success) {
        this.single = data.results;
      }
    });
  }

}
