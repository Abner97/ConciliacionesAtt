/**
* Este modulo se encarga de crear las google-charts.
* 
*
*
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/





import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})

export class GoogleChartComponent implements OnInit {
  
  @Input() title:string;
  @Input() type:string;
  @Input() data:any[];
  @Input() columnNames:any[];
  @Input() options:any[];
  @Input() width:any[];
  @Input() height:any[];
  constructor() { 
    
  }

  handler(evento){
    if(evento){
      console.log(evento[0].row)
    }
  }
  
  ngOnInit(): void {
  }
  
}
