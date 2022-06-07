import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-salebar-chart',
  templateUrl: './salebar-chart.component.html',
  styleUrls: ['./salebar-chart.component.css']
})
export class SalebarChartComponent implements OnInit {

  multi: any[] = [];
  view: number[] = [700, 400];

  
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'User';
  legendTitle: string = 'Years';
  public legendPosition: LegendPosition = LegendPosition.Below;
  animations: boolean = true;

  colorScheme = {
    // domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  // view: number[];

  constructor() {
    Object.assign(this, { multi })

    // this.view = [innerWidth / 1.9, 390];
    this.view = [innerWidth / 1.89, 400];
   }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

//   onResize(event: any) {
//     this.view = [event.target.innerWidth / 1.79, 400];
// }

}
