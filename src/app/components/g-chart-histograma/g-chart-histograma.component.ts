import { Component, OnInit } from '@angular/core';
import { HistDataService, charData} from '../../services/hist-data.service';

@Component({
  selector: 'app-g-chart-histograma',
  templateUrl: './g-chart-histograma.component.html',
  styleUrls: ['./g-chart-histograma.component.css']
})
export class GChartHistogramaComponent implements OnInit {

  data: charData[] = [];
  constructor(private _histData: HistDataService) { }

  ngOnInit(): void {
    this.data = this._histData.getData();
  }
  handler(evento){
    if(evento){
      console.log(evento[0].row)
      alert('Se selecciono la columna: '+  evento[0].row);
    }
  }
}
