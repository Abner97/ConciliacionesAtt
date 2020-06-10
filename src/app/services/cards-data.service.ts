import { Injectable } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';
import { title } from 'process';


export interface charData {
  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  options: any;
  width: number;
  height: number;
  route:string;
}

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

  // private cards: charData [] = [{
  //   title :'Ejemplo 1',
  //   type : 'PieChart',
  //   data : [
  //     ['No completado', 100-75],
  //     ['Porcentaje total inconsistencias', 75] 
  //   ],
  //   columnNames : ['Browser', 'Percentage'],
  //   options : { 
  //     pieHole: 0.8,
  //     colors:['black','green'],
  //     legend: 'none',
  //     pieSliceText: 'none',
  //     pieSliceTextStyle: {
  //       color: 'black',
  //     },
  //   },
  //   width : 340,
  //   height : 400
  // },


  createContent(datos: any[]) {

    //let graficaOut:charData;
    let movistar: telefonicaOutData = {};
    let telcel: telefonicaOutData = {};
    let nextel: telefonicaOutData = {};
    let tempArray: number[] = [];
    let titulo: string = datos[0].ESCENARIO;
    let porcentaje: number = 0;
    let transacciones:number=100000; //total de transacciones (dato estático para prueba);
    let route:string="";

    datos.forEach(element => {

   
      tempArray.push(element.INCONSISTENCIAS);
      //console.log(element);
      if (titulo == "PORTABILIDAD SALIENTE") {
        this.inconsistenciasOut = this.inconsistenciasOut + element.INCONSISTENCIAS;
        route="portabilidad-out";
      } else if (titulo == "PORTABILIDAD ENTRANTE") {
        this.inconsistenciasIn = this.inconsistenciasOut + element.INCONSISTENCIAS;
        route="portabilidad-in";
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
      
      if (titulo == "PORTABILIDAD SALIENTE") {
        porcentaje = 100 - ((movistar.inconsistencias + telcel.inconsistencias)*100)/transacciones;
      } else if (titulo == "PORTABILIDAD ENTRANTE") {
        porcentaje = 100 - ((movistar.inconsistencias + telcel.inconsistencias+nextel.inconsistencias)*100)/transacciones;
      }
      
      console.log(movistar.porcentaje + telcel.porcentaje);
      console.log(movistar);
    });

    this.Graficas.push({
      title: `REPORTE DE ${titulo}`,
      type: 'PieChart',
      data: [
        ['Iconsistencias', 100 - porcentaje],
        ['Transacciones', porcentaje]
      ],
      columnNames: ['Browser', 'Percentage'],
      options: {
        pieHole: 0.8,
        colors: ['white', 'green'],
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
    console.log(this.Graficas);
    //  this.limiteInferior=Math.min(...tempArray);
    //  this.limiteSuperior=Math.max(...tempArray);





    // datos.forEach(element => {
    //   let tempGrapH:charData={
    //     title:element.
    //   }
    //   graficas.push()
    // });

  }

  getInconsistenciasOut() {
    return this.inconsistenciasOut;
  }

  getInconsistenciasIn() {
    return this.inconsistenciasIn;
  }

  cleanData(response: any[]) {
    //this.datos=[[]]; Porque rayos no me deja limpiar el array WTF!
    //this.datos.splice(0, this.datos.length);

    this.datos.splice(0, this.datos.length)
    response.forEach(element => {
      console.log(element.FECHA_PROCESO);
      let slicedDate = element.FECHA_PROCESO.slice(0, element.FECHA_PROCESO.search("T"));
      this.datos.push([element.CATEGORIA, element.CONCILIACION, element.SHDES_ESCENARIO, element.ESCENARIO, element.SUBESCENARIO,
      element.ID_SUBESCENARIO, element.INCONSISTENCIAS, element.PORCENTAJ, slicedDate]);
    });
    this.datos = this.datos.reverse();
    this.createContent(this.datos);
  }

  getCardsOut() {//posible solución , corregir post, hacer trim del response

    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        //.get(`/portabilidad_gral/${offset}`,{headers:this.headers})
        .get(`${this.uri}/portabilidad_operador_out`, { headers: this.headers })
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

  getCardsIn() {//posible solución , corregir post, hacer trim del response
    this.Graficas.splice(0, this.Graficas.length);
    console.log("in");
    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        //.get(`/portabilidad_gral/${offset}`,{headers:this.headers})
        .get(`${this.uri}/portabilidad_operador_in`, { headers: this.headers })
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
            console.log(err);

          }
        );
    });

    return promise;


  }



  getCards() {
    return this.Graficas;
  }

  getHomeCard() {
    return this.Graficas;
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