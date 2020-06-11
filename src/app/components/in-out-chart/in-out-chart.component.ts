import { Component, OnInit } from '@angular/core';
import { InOutDataService, charData} from '../../services/in-out-data.service';
import {  FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-in-out-chart',
  templateUrl: './in-out-chart.component.html',
  styleUrls: ['./in-out-chart.component.css']
})
export class InOutChartComponent implements OnInit {

  data: charData[] = [];
  update:boolean=false;
  constructor(private _inOutData: InOutDataService, private _location: Location) { }
  profileForm = new FormGroup({
    date :new FormControl('2020-02-01'),//cambiar para seleccionar fecha default, se podria cambiar al dia actual con la funcion Date de JS
    
  });
  ngOnInit(): void {
    this.data = this._inOutData.getData();
  }
  
  handler(evento){
    
    if(evento.length>0){
      var X=[];
      
      
      
      X.push(this.data[0].data[evento[0].row]);
      X.push(this.data[0].columnNames);
      window.location.href='/detalles-general/'+JSON.stringify(X);
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
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}
