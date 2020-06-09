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

  detalles(route:string){
   
    this.router.navigate([`/${route}`]);
    console.log(route);

  }


  ngOnInit(): void {
    
  }

}
// title :'Browser market shares at a specific website, 2014',
//     type : 'PieChart',
//     data : [
     
//      ['IE', 26.8],
//      ['Chrome', 12.8],
//      ['Safari', 8.5],
//      ['Opera', 6.2],
//      ['Others', 0.7] 
//     ],
//     columnNames : ['Browser', 'Percentage'],
//     options : { 
//     pieHole: 0.7
//    },
//     width : 400,
//     height : 400