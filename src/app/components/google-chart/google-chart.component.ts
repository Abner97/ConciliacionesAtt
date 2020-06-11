import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
      //alert('do something');
    }
  }
  
  ngOnInit(): void {
  }
  
}
