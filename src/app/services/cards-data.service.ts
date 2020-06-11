/**
* Este modulo se encarga de crear la informacion de las cards que están en home, azul, verde y naranja.
* 
*Se hace una peteción http tipo GET a la Api para obtener los datos de portabilidad_in y portabilidad_out
* 
*
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/**
*Esta interfaz contiene el formato de los datos que se necesitan para generar la google charts
* 
*/
export interface charData {
  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  options: any;
  width: number;
  height: number;
  route: string;
}

/**
*Esta interfaz contiene el formato de los datos que se necesitan guardar los datos por telefónica
* 
*/
interface telefonicaOutData {
  nombre?: string;
  inconsistencias?: number;
  porcentaje?: number;
  fechaProceso?: string;
}

@Injectable({
  providedIn: 'root'
})


export class CardsDataService {

  uri = "http://137.117.78.117:3000";
  limiteSuperior: number;
  limiteInferior: number;
  inconsistenciasOut: number;
  inconsistenciasIn: number;
  Graficas: charData[] = [];

  constructor(private http: HttpClient) {
    this.inconsistenciasOut = 0;
    this.inconsistenciasIn = 0;


  }

  response: any[] = [];
  datos: any[] = [];

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });

  
  /**
  *Esta función se encarga de crear el contenido de las cards
  * @param datos - Obtiene la respuesta de la API.
  * @param telefonica - nombre de la telefónica de donde se quiere obtener los datos (opcional).
  */
  createContent(datos: any[],telefonica?:string) {

    let movistar: telefonicaOutData = {};
    let telcel: telefonicaOutData = {};
    let nextel: telefonicaOutData = {};
    let tempArray: number[] = [];//guarda el total de incosistencias
    let titulo: string = datos[0].ESCENARIO;
    let nombreTelefonica:string="";
    let color="green"; //color por default de las graficas de kpi
    let porcentaje: number = 0;
    let transacciones: number = 100000; //total de transacciones (dato estático para prueba);
    let route: string = "";

    datos.forEach(element => {


      tempArray.push(element.INCONSISTENCIAS);
      
      if (titulo == "PORTABILIDAD SALIENTE") {
        this.inconsistenciasOut = this.inconsistenciasOut + element.INCONSISTENCIAS;
        route = "portabilidad-out";
      } else if (titulo == "PORTABILIDAD ENTRANTE") {
        this.inconsistenciasIn = this.inconsistenciasOut + element.INCONSISTENCIAS;
        route = "portabilidad-in";
      }

      switch (element.SUBESCENARIO) {
        case "MOVISTAR (PGS)":
          movistar = {
            nombre: element.SUBESCENARIO,
            inconsistencias: element.INCONSISTENCIAS,
            porcentaje: element.PORCENTAJE,
            fechaProceso: element.FECHA_PROCESO
          }
          break;

        case "TELCEL":
          telcel = {
            nombre: element.SUBESCENARIO,
            inconsistencias: element.INCONSISTENCIAS,
            porcentaje: element.PORCENTAJE,
            fechaProceso: element.FECHA_PROCESO
          }
          
          
          break;

        case "NEXTEL":
          nextel = {
            nombre: element.SUBESCENARIO,
            inconsistencias: element.INCONSISTENCIAS,
            porcentaje: element.PORCENTAJE,
            fechaProceso: element.FECHA_PROCESO
          }
          break;
      }

      if (titulo == "PORTABILIDAD SALIENTE") {//Si el subescenario es PORTABILIDAD SALIENTE genera solo datos para este tipo de SUBESCENARIO
        
        if(telefonica=="movistar"){ //si se llega a pedir solo los datos de una telefonica, solo guardara datos para esa telefonica si no generara los datos generales que se ven en Home
          nombreTelefonica=movistar.nombre;
          porcentaje=100-(movistar.inconsistencias*100)/transacciones;
        }else if(telefonica=="telcel"){
          nombreTelefonica=telcel.nombre;
          color="blue";
          porcentaje=100-(telcel.inconsistencias*100)/transacciones;
       
        }else{
          porcentaje = 100 - ((movistar.inconsistencias + telcel.inconsistencias) * 100) / transacciones;
        }
      } else if (titulo == "PORTABILIDAD ENTRANTE") {//Si el subescenario es PORTABILIDAD SALIENTE genera solo datos para este tipo de SUBESCENARIO
        if(telefonica=="movistar"){
          nombreTelefonica=movistar.nombre;
          porcentaje=100-(movistar.inconsistencias*100)/transacciones;
        }else if(telefonica=="telcel"){
          color="blue";
          nombreTelefonica=telcel.nombre;
          porcentaje=100-(telcel.inconsistencias*100)/transacciones;
       
        }else if(telefonica=="nextel"){
          color="orange";
          nombreTelefonica=nextel.nombre;
          porcentaje=100-(nextel.inconsistencias*100)/transacciones;
        }else{
          porcentaje = 100 - ((movistar.inconsistencias + telcel.inconsistencias + nextel.inconsistencias) * 100) / transacciones;
        }
        
      }

    });

    this.Graficas.push({ //guarda el contenido de las graficas que se van a presentar en un array
      title: `REPORTE DE ${titulo}  ${nombreTelefonica}`,
      type: 'PieChart',
      data: [
        ['Iconsistencias', 100 - porcentaje],
        ['Transacciones', porcentaje]
      ],
      columnNames: ['Browser', 'Percentage'],
      options: {
        pieHole: 0.8,
        colors: ['white', color],
        legend: 'none',
        pieSliceText: 'none',
        pieSliceTextStyle: {
          color: 'black',
        },
      },
      width: 340,
      height: 400,
      route: route
    })
    
  }
  
  /**
  *
  * @returns devuelve el total de inconsistencias en portabilidad out
  * 
  */
  getInconsistenciasOut() {
    return this.inconsistenciasOut;
  }

    /**
  *
  * @returns devuelve el total de inconsistencias en portabilidad in
  * 
  */
  getInconsistenciasIn() {
    return this.inconsistenciasIn;
  }

     /**
  *Esta funcion se encarga de hacer la petición a la API para portabilidad_operador_out y portabilidad_operador_in
  * @param type - tipo de peticion que se hara (in o out);
  * @param telefonica - cuando se va a generar los kpi para cada telefonica en este parametro se especifica el nombre de la telefonica que desea obtener el kpi (movistar,telcel o nextel)
  * @returns devuelve el resultado de la promesa true o false
  * 
  */
  setCards(type: string,telefonica?:string) {
    
    let req = "";
    if (type == "in") {
      this.Graficas.splice(0, this.Graficas.length);//se vacia el array de graficas aquí, porque "in" es el primero que se pide y no queremos que se dupliquen las gráficas.
      req = "/portabilidad_operador_in";
    } else if(type == "out"){
      
      req = "/portabilidad_operador_out";
    }
    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        .get(`${this.uri}${req}`, { headers: this.headers })
        .toPromise()
        .then((res: any[]) => {
          // Success
          this.createContent(res,telefonica)
          resolve(true);

        },
          err => {
            // Error
            reject(false);
          }
        );
    });
    return promise;
  }


  /**
  *
  * Devuelve el array con los datos para generar las graficas
  * 
  */
  getCards() {
    return this.Graficas;
  }

  /**
  *
  * Limpia el array que contiene los datos de las graficas.
  * 
  */
  cleanArray(){
    this.Graficas.splice(0, this.Graficas.length)
  }
}

