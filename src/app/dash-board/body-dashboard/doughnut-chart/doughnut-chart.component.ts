import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']

})


export class DoughnutChartComponent implements OnInit {

  view: number[] = [700, 400];

  constructor() {

  }

  ngOnInit(): void {
  }

  series = [
    {
      "name": "Male",
      "value": 50,
      "label": "Male",
    },
    {
      "name": "Female",
      "value": 30,
      "label": "Female",
    },
    {
      "name": "Married Couples",
      "value": 10,
      "label": "Married Couples",
    },
    {
      "name": "Enganged Couples",
      "value": 10,
      "label": "Enganged Couples",
    }
  ];

  pieChartLabel(series: any[], name: string): string {
    const item = series.filter(data => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

}
