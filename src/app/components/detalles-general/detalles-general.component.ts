import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-general',
  templateUrl: './detalles-general.component.html',
  styleUrls: ['./detalles-general.component.css']
})
export class DetallesGeneralComponent implements OnInit {
  data: string;
  constructor(private actRoute: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    //buscar que la data eviada salga de su respectivo componente con este en formato 
    /*{
      X.push(this.data[0].data[evento[0].row]); siendo esta la data que desea ver reflejada en la tabla de detalles
      X.push(this.data[0].columnNames); siendo estos los nombres de los indices de la tabla a mostrar
      this.datadetalles=JSON.stringify(X);  strigyfiy para pasarlo por el url
      window.location.href='/detalles-general/'+this.datadetalles;
    }*/
    this.actRoute.paramMap.subscribe(params => {
      this.data = JSON.parse(params.get('data'));
    });
  }
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}
