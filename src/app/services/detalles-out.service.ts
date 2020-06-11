/**
* Este modulo se encarga de crear la informacion de la grafica detalles_out;
* 
*Se hace una peteción http tipo GET a la Api para obtener los datos de Detalles ot;
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
}

@Injectable({
  providedIn: 'root'
})

export class DetallesOutService {

  constructor(private http: HttpClient) { }

  uri = "http://137.117.78.117:3000"; //url principal de la API en Azure (cambiar por la API de la empresa);
  token;
  response:any[]=[]; //respuesta de la API
  datos:any[]=[]; //datos numericos de la grafica 
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });
  
  private data: charData[] = [{ //datos de la grafica
    title: 'Bill Cycle Acumlado por dia',
    type: 'ColumnChart',
    data: this.datos,
    columnNames: ['Fecha', 'Activaciones', 'CambioDN','Otros','Portin'],
    options: {
      colors: ['#62A0D7','#EE8636','#AAAAAA', '#FFC400'],
      isStacked: true,
      bar: { groupWidth: '35%' },
    },
    width: 1150,
    height: 400
  }
  ]

  /**
   * Función que devuelve datos de la grafica detalles_out
   * @returns datos de la grafica
   */
  getData(){
    return this.data;
  }
/**
   * Función que guarda los datos de la grafica en la variable datos y limpia el formato de las fechas.
   * @param response - respuesta de la API
   */
  cleanData(response:any[]) {
    this.datos.splice(0, this.datos.length);
    console.log(this.response);
    response.forEach(element => {
      console.log(element.FECHA_PROCESO);
      let slicedDate=element.FECHA_PROCESO.slice(0,element.FECHA_PROCESO.search("T"));
      this.datos.push([slicedDate,element.ACTIVACIONES,element.CAMBIO_DN,element.OTROS,element.PORTIN]);
    });
    this.datos=this.datos.reverse();
  }

  /**
   * Función que hace la petición a la API para obtener los datos de portabilidad lineal_origen_out
   * @param offset - cantidad de dias desde de la fecha que selecciono a la actual (debido a que los datos de la bd no son actuales)
   * @returns la respuesta de la promesa true or false
   */
  getPosts(offset:number) {
  
    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        .get(`${this.uri}/portabilidad_lineal_origen_out/${offset}`,{headers:this.headers})
        .toPromise()
        .then((res: any[]) => {
          // Success
          res;
          console.log(res);
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
