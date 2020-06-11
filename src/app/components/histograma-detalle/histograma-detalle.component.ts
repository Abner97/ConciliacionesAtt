import { Component, OnInit } from '@angular/core';
import { HistDataService, charData } from '../../services/hist-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-histograma-detalle',
  templateUrl: './histograma-detalle.component.html',
  styleUrls: ['./histograma-detalle.component.css']
})

export class HistogramaDetalleComponent implements OnInit {
  row: string;
  data: charData[] = [];
  constructor(private _histData: HistDataService, private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.data = this._histData.getData();
    
    this.actRoute.paramMap.subscribe(params => {
      this.row = params.get('row');
    });
    console.log(this.row)
  }
  volver() {
    window.location.href = '/histograma';
  }
}
