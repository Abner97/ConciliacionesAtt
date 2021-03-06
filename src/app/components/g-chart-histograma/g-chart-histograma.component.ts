import { Component, OnInit } from '@angular/core';
import { HistDataService, charData} from '../../services/hist-data.service';
import { DetallesGeneralComponent } from '../detalles-general/detalles-general.component';

@Component({
  selector: 'app-g-chart-histograma',
  templateUrl: './g-chart-histograma.component.html',
  styleUrls: ['./g-chart-histograma.component.css']
})
export class GChartHistogramaComponent implements OnInit {
  datadetalles:any;
  data: charData[] = [];
  constructor(private _histData: HistDataService) { }

  ngOnInit(): void {
    this.data = this._histData.getData();
  }
  handler(evento){
    
    if(evento.length>0){
      var X=[];
      X.push(this.data[0].data[evento[0].row]);
      X.push(this.data[0].columnNames);
      this.datadetalles=JSON.stringify(X);
      window.location.href='/detalles-general/'+this.datadetalles;
    }
  }
}
