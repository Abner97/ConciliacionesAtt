/**
* Este modulo se encarga de crear el componente de las cards.
* 
*
*
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/



import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title:string;
  @Input() type:string;
  @Input() data:any[];
  @Input() columnNames:any[];
  @Input() options:any[];
  @Input() width:any[];
  @Input() height:any[];
  @Input() colors:any[];
  @Input() route?:string;
  @Input() inconsistencias?:any[];

  
  constructor(private router:Router) { }
  
    /**
*Esta función se activa cuando el usuario hace clic en el botón detalles de una card.
*/  
  detalles(route:string){
   
    this.router.navigate([`/${route}`]);
    

  }


  ngOnInit(): void {
    
  }

}
