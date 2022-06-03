import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { PersonManager } from 'src/app/shared/services/restcontroller/bizservice/person.service';
import { single } from '../salepie-chart/data';


//  


@Component({
  selector: 'app-salepie-chart',
  templateUrl: './salepie-chart.component.html',
  styleUrls: ['./salepie-chart.component.css']
})
export class SalepieChartComponent implements OnInit {

  single: any[] = [];
  view: any[] = [700, 400];
  femalecount: number = 0;
  malecount: number = 0;
  femalepercentage: number = 0;
  malepercentage: number = 0;
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendTitle: string = 'Genders';
  public legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private personmanager: PersonManager) {
    Object.assign(this, { single });

  }
  ngOnInit(): void {

    this.personmanager.allperson().subscribe((response,) => {
      console.log("res", response)
      for (let i = 0; i < response; i++) {
        console.log("res", response[i].person001mb.sex)
        if (response[i].sex == 'male') {
          this.malecount++;
        }
        // else if (response[i].subpname == 'female') {
        //   this.malecount++;
        // }
      }
    })
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
}
