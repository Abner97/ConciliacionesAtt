import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-general',
  templateUrl: './detalles-general.component.html',
  styleUrls: ['./detalles-general.component.css']
})
export class DetallesGeneralComponent implements OnInit {
  data: any;
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
      console.log(params.get('data'));
      if((params.get('data')).toString()== "1"){
        console.log()
        this.data={0:["Telcel",localStorage.getItem("TelcelIn"),localStorage.getItem("TelcelOut")],1:["Provedor","In","Out"]}
        console.log(this.data);
      }else if((params.get('data')).toString()== "2"){
        console.log()
        this.data={0:["Movistar",localStorage.getItem("MovistarIn"),localStorage.getItem("MovistarOut")],1:["Provedor","In","Out"]}
        console.log(this.data);
      }else if((params.get('data')).toString()== "3"){
        console.log()
        this.data={0:["Nextel",localStorage.getItem("NextelIn")],1:["Provedor","In"]}
        console.log(this.data);
      }   
      else{
        console.log(JSON.parse(params.get('data')));
        this.data = JSON.parse(params.get('data'));
        console.log(this.data);
        
      }
    });
  }
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}
