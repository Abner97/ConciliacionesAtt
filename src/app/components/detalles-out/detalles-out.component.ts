import { Component, OnInit } from '@angular/core';
import { DetallesOutService , charData} from '../../services/detalles-out.service';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalles-out',
  templateUrl: './detalles-out.component.html',
  styleUrls: ['./detalles-out.component.css']
})
export class DetallesOutComponent implements OnInit {

  data: charData[] = [];
  update:boolean=false;
  constructor(private _inOutData: DetallesOutService) { }
  profileForm = new FormGroup({
    date :new FormControl(''),
    
  });
  ngOnInit(): void {
    this.data = this._inOutData.getData();
  }
  handler(evento){
    
    if(evento.length>0){
      console.log(evento[0].row)
      window.location.href='/histograma-detallesp/'+evento[0].row;
    }
  }

  onSubmit(){
  this.update=false;
   let fechaConsulta=new Date(this.profileForm.value.date);
   let today= new Date();
  
   let resta = today.getTime() - fechaConsulta.getTime();
   let offset= Math.round(resta/ (1000*60*60*24));
   
   (async () => {
    this.update= await this._inOutData.getPosts(offset);
   
    })()
    
  }
}