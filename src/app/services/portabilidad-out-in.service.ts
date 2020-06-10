import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  uri = "http://137.117.78.117:3000";

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
    console.log(datos.length);
    this.datos.splice(0, this.datos.length);
    //let graficaOut:charData;
  
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

  //  console.log("GRAAA");
    console.log(this.Grafica);
  }

  getInconsistenciasOut() {
    return this.inconsistenciasOut;
  }

  getInconsistenciasIn() {
    return this.inconsistenciasIn;
  }

  setGraph(type:string) {//posible solución , corregir post, hacer trim del response
    
    let request=''; 
    if(type=="out"){
        request='/portabilidad_operador_out';
     }else if(type=="in"){
        request='/portabilidad_operador_in'
     }

    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        //.get(`/portabilidad_gral/${offset}`,{headers:this.headers})
        .get(this.uri+request, { headers: this.headers })
        .toPromise()
        .then((res: any[]) => {
          // Success
          console.log(res);
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
  //  console.log("imprimendo graph en return");
    console.log(this.Grafica);
    return this.Grafica;
  }

}

// title = 'Browser market shares at a specific website, 2014';
//   type = 'PieChart';
//   data = [

//      ['IE', 26.8],
//      ['Chrome', 12.8],
//      ['Safari', 8.5],
//      ['Opera', 6.2],
//      ['Others', 0.7] 
//   ];
//   columnNames = ['Browser', 'Percentage'];
//   options = { 
//     pieHole: 0.7,

//   };
//   width = 400;
//   height = 400;





