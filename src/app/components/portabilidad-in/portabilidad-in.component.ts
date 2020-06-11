import { Component, OnInit } from '@angular/core';
import { PortabilidadOutInService,charData } from '../../services/portabilidad-out-in.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portabilidad-in',
  templateUrl: './portabilidad-in.component.html',
  styleUrls: ['./portabilidad-in.component.css']
})

export class PortabilidadInComponent implements OnInit {
  data: charData={};
  mostrar:boolean=false;
  constructor(private inOutService:PortabilidadOutInService, private _location: Location) { 
    (async () => {
      
       await this.inOutService.setGraph('in');
       this.data = this.inOutService.getGraph();
       this.mostrar=true;
       
      })()
  }

  ngOnInit(): void {
  }

  handler(evento){
    if(evento.length>0){
      var X=[];
      
      
      
      if(this.data.data[evento[0].row][0]=="MOVISTAR (PGS)"){
        X.push(["MOVISTAR",this.data.data[evento[0].row][1]])
      }
      else{
        X.push(this.data.data[evento[0].row]);
      }
      X.push(["Operador","Porcentaje"]);
      
      window.location.href='/detalles-general/'+JSON.stringify(X);
    }
  }
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}

