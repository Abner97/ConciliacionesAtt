import { Injectable } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

export interface charData{
  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  options: any;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})

export class HistDataService {
  constructor() { }
  private data: charData [] = [{
    title :'Bill Cycle Acumlado por dia',
    type : 'Bar',
    data : [
      ['Abril 1,2018', 100000],
      ['Abril 2,2018', 200000],
      ['Abril 3,2018', 300000],
      ['Abril 4,2018', 400000],
      ['Abril 5,2018', 500000],
      ['Abril 6,2018', 600000],
      ['Abril 7,2018', 700000],
      ['Abril 8,2018', 800000],
      ['Abril 9,2018', 900000],
      ['Abril 10,2018', 1000000],
      ['Abril 11,2018', 1100000],
      ['Abril 12,2018', 1200000],
    ],
    columnNames : ['Fecha', 'Totales'],
    options : { 
      colors:['green','red'],
    },
    width : 1100,
    height : 500
  }
  ]
  getData(){
    return this.data;
  }
}
