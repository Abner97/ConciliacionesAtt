import { Component, OnInit } from '@angular/core';
import { InOutDataService, charData} from '../../services/in-out-data.service';

@Component({
  selector: 'app-in-out-chart',
  templateUrl: './in-out-chart.component.html',
  styleUrls: ['./in-out-chart.component.css']
})
export class InOutChartComponent implements OnInit {

  data: charData[] = [];
  constructor(private _histData: InOutDataService) { }

  ngOnInit(): void {
    this.data = this._histData.getData();
  }
  handler(evento){
    
    if(evento.length>0){
      console.log(evento[0].row)
      window.location.href='/histograma-detallesp/'+evento[0].row;
    }
  }

  on
}
