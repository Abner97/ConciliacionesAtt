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

export class InOutDataService {
  constructor() { }
  private data: charData [] = [{
    title :'Bill Cycle Acumlado por dia 2018',
    type : 'Line',
    data : [
      ['Abril 1,2018', 100000,30000],
      ['Abril 2,2018', 200000,20000],
      ['Abril 3,2018', 50000,50000],
      ['Abril 4,2018', 20000,40000],
      ['Abril 5,2018', 100000,200000],
      ['Abril 6,2018', 50000,60000],
      ['Abril 7,2018', 200000,80000],
      ['Abril 8,2018', 100000,40000],
      ['Abril 9,2018', 90000,20000],
      ['Abril 10,2018', 150000,90000],
      ['Abril 11,2018', 100000,70000],
      ['Abril 12,2018', 120000,50000],
    ],
    columnNames : ['Fecha', 'In','Out'],
    options : { 
      colors:['green','red','blue'],
    },
    width : 1400,
    height : 500
  }
  ]
  getData(){
    return this.data;
  }
}
