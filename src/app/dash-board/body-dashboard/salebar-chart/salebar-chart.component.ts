import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { SubscriberdetailsManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberdetails.service';


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
    monthlyregistration?: Date;
    janregcount: number = 0;
    febregcount: number = 0;
    marregcount: number = 0;
    aprregcount: number = 0;
    mayregcount: number = 0;
    juneregcount: number = 0;
    julyregcount: number = 0;
    augregcount: number = 0;
    sepregcount: number = 0;
    octregcount: number = 0;
    novregcount: number = 0;
    decregcount: number = 0;
    customColors: any;
    colorScheme = { domain: ['#BAABDA'] };
    switch_value: string | undefined;


    // view: number[];

    constructor(private subscriberdetailsmanager: SubscriberdetailsManager) {


        // this.view = [innerWidth / 1.9, 390];
        // this.view = [innerWidth / 1.89, 400];
    }

    ngOnInit(): void {
        this.subscriberdetailsmanager.allsubdetails().subscribe((response) => {
            //  console.log("not", response)
            for (let i = 0; i < response.length; i++) {
                // console.log("response", response)
                // if (response[i].monthlyregistration == 'Month') {
                //     // console.log("much",response[i] )
                let regdetails = new Date(response[i].monthlyregistration);
                // console.log("plandate", regdetails);
                const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                let monthName = response[i].monthlyregistration ? months[regdetails.getMonth()] : "";

                this.switch_value = monthName;
                // console.log("switch_value", this.switch_value)
                switch (this.switch_value) {

                    case "01":
                        this.switch_value = "01";
                        this.janregcount++;

                        break;
                    case "02":
                        this.switch_value = "02";
                        this.febregcount++;
                        break;
                    case "03":
                        this.switch_value = "03";
                        this.marregcount++;
                        break;
                    case "04":
                        this.switch_value = "04";
                        this.aprregcount++;
                        break;
                    case "05":
                        this.switch_value = "05";
                        this.mayregcount++;
                        break;
                    case "06":
                        this.switch_value = "06";
                        this.juneregcount++;
                        console.log("reg", this.juneregcount)
                        break;
                    case "07":
                        this.switch_value = "07";
                        this.julyregcount++;
                        break;
                    case "08":
                        this.switch_value = "08";
                        this.augregcount++;
                        break;
                    case "09":
                        this.switch_value = "09";
                        this.sepregcount++;
                        break;
                    case "10":
                        this.switch_value = "10";
                        this.octregcount++;
                        break;
                    case "11":
                        this.switch_value = "07";
                        this.novregcount++;
                        break;
                    case "12":
                        this.switch_value = "12";
                        this.decregcount++;
                        break;
                }

            }
            this.multi = [
                {
                    "name": "JAN",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.janregcount
                        },
                    ]
                },
                {
                    "name": "FEB",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.febregcount,
                        },

                    ]
                },
                {
                    "name": "MAR",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.marregcount,
                        },
                    ]
                },
                {
                    "name": "APR",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.aprregcount,
                        },
                    ]
                },
                {
                    "name": "MAY",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.mayregcount,
                        },
                    ]
                },
                {
                    "name": "JUNE",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.juneregcount,
                        },
                    ]
                },
                {
                    "name": "JULY",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.julyregcount,
                        },
                    ]
                },
                {
                    "name": "AUG",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.augregcount,
                        },

                    ]
                },
                {
                    "name": "SEP",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.sepregcount,
                        },
                    ]
                },
                {
                    "name": "OCT",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.octregcount,
                        },
                    ]
                },
                {
                    "name": "NOV",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.novregcount,
                        },
                    ]
                },
                {
                    "name": "DEC",
                    "series": [
                        {
                            "name": "2022",
                            "value": this.decregcount,
                        },

                    ]
                },
            ]
        })

    }



    onSelect(data: any): void {
        // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: any): void {
        // console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
        // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

    //   onResize(event: any) {
    //     this.view = [event.target.innerWidth / 1.79, 400];
    // }

}
