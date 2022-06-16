import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
// import { single } from '../salepie-chart/data';
import { PersonManager } from 'src/app/shared/services/restcontroller/bizservice/person.service';

@Component({
  selector: 'app-salepie-chart',
  templateUrl: './salepie-chart.component.html',
  styleUrls: ['./salepie-chart.component.css']
})

// class single1 {
//   name?: string;
//   value?: string="";
// }

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
  trust: any;
  legendTitle: string = 'Genders';
  res: any;
  key: any;
  public legendPosition: LegendPosition = LegendPosition.Below;
  colorScheme = {domain: ['#006778', '#24A19C']};
  httpClient: any;
  domain: string[] | any;

  constructor(private personmanager: PersonManager) {
    // Object.assign(this, { single });

    // const dynamicallyLoadJsonFile = import('../salepie-chart/data');

  }
  ngOnInit(): void {

    this.personmanager.allperson().subscribe((response) => {
      for (let i = 0; i < response.person001mb.length; i++) {
        if (response.person001mb[i].sex == 'male') {
          this.malecount++;
        }
        else if (response.person001mb[i].sex == 'female') {
          this.femalecount++;
        }
      }
      this.single = [{ name: "Male", value: this.malecount }, { name: "Female", value: this.femalecount }];
      // console.log("muh", this.malecount,this.malecount)
      // Object.assign(this, { s });

    })

    // for(var key in response)
    // {
    //   console.log("fix", response[key])
    // }
  }


  onSelect(data: any): void {
    //   // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    //   // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    //   // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}




