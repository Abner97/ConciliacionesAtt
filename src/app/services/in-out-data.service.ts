/**
* Este modulo se encarga de crear la informacion de la grafica de portabilidad_general.
* 
*Se hace una peteción http tipo GET a la Api para obtener los datos de portabilidad general;
* 
*
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/


import { Injectable} from '@angular/core';
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
}

@Injectable({
  providedIn: 'root'
})

export class InOutDataService {

  constructor(private http: HttpClient) { }

  uri = "http://137.117.78.117:3000"; //dirección ip de la API en Azure
  response:any[]=[]; //respuesta de la API
  datos:any[]=[];//datos numericos de la grafica
  headers = new HttpHeaders({ //headers de la peticion htttp
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });

  
  private data: charData[] = [{ //datos de la grafica
    title: 'Bill Cycle Acumlado por dia',
    type: 'Line',
    data: this.datos,
    columnNames: ['Fecha', 'In', 'Out'],
    options: {
      colors: ['green', 'red', 'blue'],
    },
    width: 1100,
    height: 500
  }
  ]

  getData(){
    return this.data;
  }

   /**
  *Esta función se encarga de generar los datos para la grafica de portabilidad general y detalles out
  *y quitar los caracteres indeseados en las fechas.
  * @param response - respuesta de la API.
  */
  cleanData(response:any[]) {
    this.datos.splice(0, this.datos.length);//limpieza de datos

    response.forEach(element => {
      let slicedDate=element.FECHA_PROCESO.slice(0,element.FECHA_PROCESO.search("T"));
      this.datos.push([slicedDate,element.PORT_OUT,element.PORT_IN]);
    });
    this.datos=this.datos.reverse();
  }


/**
   * Función que hace la petición a la API para obtener los datos de portabilidad general
   * @param offset - cantidad de dias desde de la fecha que selecciono a la actual (debido a que los datos de la bd no son actuales)
   * @returns la respuesta de la promesa true or false
   */
  getPosts(offset:number) {
  
    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        .get(`${this.uri}/portabilidad_gral/${offset}`,{headers:this.headers})
        .toPromise()
        .then((res: any[]) => {
          // Success
          this.cleanData(res);
          
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




  
}
