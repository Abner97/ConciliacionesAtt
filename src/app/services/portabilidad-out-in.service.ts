/**
* Este modulo se encarga de crear la informacion de la graficas de pastel para informacion general de portabilidad out e in.
* 
*Se hace una peteción http tipo GET a la Api para obtener los datos;
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
  title?: string;
  type?: string;
  data?: any[];
  columnNames?: string[];
  options?: any;
  width?: number;
  height?: number;
}


@Injectable({
  providedIn: 'root'
})

export class PortabilidadOutInService {


  inconsistenciasOut: number;
  inconsistenciasIn: number;
  private Grafica: charData; 
  private datos:any[];
  uri = "http://137.117.78.117:3000";//dirección ip de la API

  constructor(private http: HttpClient) {
    this.inconsistenciasOut = 0;
    this.inconsistenciasIn = 0;
    
    this.datos=[];
    

  }
  
  response: any[] = [];


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });


  createContent(datos: any[]) {
    
    this.datos.splice(0, this.datos.length);
  
    let titulo: string = datos[0].ESCENARIO;
    let colores:string[]=[];
    

    if (titulo == "PORTABILIDAD SALIENTE") {
      colores.push('#ef7b05','#006cb6')
      
    } else if (titulo == "PORTABILIDAD ENTRANTE") {
      colores.push('#ef7b05', '#fbb800','#006cb6');
    }

    datos.forEach(element => {
      
      this.datos.push([element.SUBESCENARIO,element.PORCENTAJE]);
    });

    this.Grafica ={
      title: `${titulo}`,
      type: 'PieChart',
      data: this.datos,
      options: {
        colors: colores,
        is3D: true,
        fontSize: 16
      },
      width: 650,
      height: 500
    }
  }

  getInconsistenciasOut() {
    return this.inconsistenciasOut;
  }

  getInconsistenciasIn() {
    return this.inconsistenciasIn;
  }

  setGraph(type:string) {
    
    let request=''; 
    if(type=="out"){
        request='/portabilidad_operador_out';
     }else if(type=="in"){
        request='/portabilidad_operador_in'
     }

    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        .get(this.uri+request, { headers: this.headers })
        .toPromise()
        .then((res: any[]) => {
          // Success
          
          this.createContent(res);

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

  getGraph() {
    return this.Grafica;
  }

}



