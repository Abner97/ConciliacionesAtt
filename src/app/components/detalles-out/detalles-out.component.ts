/**
* Este modulo se encarga de crear el componenten detalles_out.
* 
*Para obtener la información de la gráfica usa el servicio detalles-out.service
*
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/



import { Component, OnInit } from '@angular/core';
import { DetallesOutService , charData} from '../../services/detalles-out.service';
import {  FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-out',
  templateUrl: './detalles-out.component.html',
  styleUrls: ['./detalles-out.component.css']
})


export class DetallesOutComponent implements OnInit {

  data: charData[] = [];
  update:boolean=false;
  constructor(private _inOutData: DetallesOutService, private _location: Location) { }
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
  
  /**
*Esta función se activa cuando el usuario hace clic en el botón consultar y calcula los días de 
* la fecha consultada a la fecha actual.
*/
  onSubmit(){
   this.update=false; //esta variable es la que controla si la gráfica se ve o no en pantalla si es false no la muestra de lo contrario si la muestra.
   let fechaConsulta=new Date(this.profileForm.value.date);
   let today= new Date();
  
   let resta = today.getTime() - fechaConsulta.getTime();
   let offset= Math.round(resta/ (1000*60*60*24));
   
   (async () => {
    this.update= await this._inOutData.getPosts(offset); //si la promesa es correcta update obtiene el valor true, si no false.
   
    })()
    
  }
  volver() {
    console.log(this.data[0])
    this._location.back();
  }
}