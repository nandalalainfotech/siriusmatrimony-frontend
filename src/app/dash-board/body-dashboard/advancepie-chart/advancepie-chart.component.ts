import { Component, OnInit } from '@angular/core';
import { LegendPosition } from 'ag-grid-community';
import * as Chart from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';




@Component({
  selector: 'app-advancepie-chart',
  templateUrl: './advancepie-chart.component.html',
  styleUrls: ['./advancepie-chart.component.css']
})
export class AdvancepieChartComponent implements OnInit {


  
  dataArray: any = [];

  ngOnInit() {}

  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;

    // Stackblitz no longer supports local json files.
    // Uncomment below and use import at top.
    // Replace datasets with this.dataArray

    // for (let key in chartData.items) {
    //   if (chartData.items.hasOwnProperty(key)) {
    //     this.dataArray.push(chartData.items[key]);
    //   }
    // }

    data = {
      labels: ['Marriage Hall', 'Assisted Service','Party Hall'],
      datasets: [
        {
          label: 'Marriage Hall',
          data: [0, 50, 45, 100],
          backgroundColor: 'rgba(40,125,200,.5)',
          borderColor: 'rgb(40,100,200)',
          fill: true,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Assisted Service',
          data: [30, 90, 111, 20],
          backgroundColor: 'rgba(75,10,125,.5)',
          borderColor: 'rgb(75,10,125)',
          fill: true,
          lineTension: 0.2,
          radius: 5,
        },
        {
          label: 'Party Hall',
          data: [50, 90, 211, 400],
          backgroundColor: 'rgba(245,245,220)',
          borderColor: 'rgb(245,245,22)',
          fill: true,
          lineTension: 0.2,
          radius: 5,
        },
      ],
    };

    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        // text: '',
        fontSize: 12,
        fontColor: '#666',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,
        },
      },
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}


