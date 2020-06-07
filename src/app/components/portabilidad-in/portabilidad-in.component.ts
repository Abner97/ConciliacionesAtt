import { Component, OnInit } from '@angular/core';
import { PortabilidadOutInService,charData } from '../../services/portabilidad-out-in.service';



@Component({
  selector: 'app-portabilidad-in',
  templateUrl: './portabilidad-in.component.html',
  styleUrls: ['./portabilidad-in.component.css']
})

export class PortabilidadInComponent implements OnInit {
  data: charData={};
  mostrar:boolean=false;
  constructor(private inOutService:PortabilidadOutInService) { 
    (async () => {
      console.log("await");
       await this.inOutService.setGraph('in');
       this.data = this.inOutService.getGraph();
       this.mostrar=true;
       console.log(this.data.type);
      })()
  
      
   
      
  }

  ngOnInit(): void {

  }
handler(evento){
    
    if(evento.length>0){
      console.log(evento[0].row)
      window.location.href='/histograma-detallesp/'+evento[0].row;
    }
  }

}

