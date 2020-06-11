import { Component, OnInit } from '@angular/core';
import { PortabilidadOutInService,charData } from '../../services/portabilidad-out-in.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portabilidad-out',
  templateUrl: './portabilidad-out.component.html',
  styleUrls: ['./portabilidad-out.component.css']
})
export class PortabilidadOutComponent implements OnInit {
  data: charData={};
  mostrar:boolean=false;
  constructor(private inOutService:PortabilidadOutInService, private _location: Location) { 
    (async () => {
      console.log("await");
       await this.inOutService.setGraph('out');
       this.data = this.inOutService.getGraph();
       this.mostrar=true;
       console.log(this.data.type);
      })()
  }

  ngOnInit(): void {
  }
  handler(evento){
    if(evento.length>0){
      var X=[];
      console.log(this.data.data[evento[0].row]);
      console.log(["Operador","Porcetaje"]);
      console.log(this.data.data[evento[0].row][0]);
      if(this.data.data[evento[0].row][0]=="MOVISTAR (PGS)"){
        X.push(["MOVISTAR",this.data.data[evento[0].row][1]])
      }
      else{
        X.push(this.data.data[evento[0].row]);
      }
      X.push(["Operador","Porcetaje"]);
      console.log(X);
      window.location.href='/detalles-general/'+JSON.stringify(X);
    }
  }
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}
