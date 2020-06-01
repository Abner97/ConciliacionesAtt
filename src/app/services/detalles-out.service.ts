import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  uri = "apiattsmc.eastus.cloudapp.azure.com:3000";
  token;
  response:any[]=[];
  datos:any[]=[];
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });

  // options:HttpHeader = { headers: this.headers };

  
  private data: charData[] = [{
    title: 'Bill Cycle Acumlado por dia 2018',
    type: 'ColumnChart',
    // data: [
    //   ['Abril 1,2018', 100000, 30000],
    //   ['Abril 2,2018', 200000, 20000],
    //   ['Abril 3,2018', 50000, 50000],
    //   ['Abril 4,2018', 20000, 40000],
    //   ['Abril 5,2018', 100000, 200000],
    //   ['Abril 6,2018', 50000, 60000],
    //   ['Abril 7,2018', 200000, 80000],
    //   ['Abril 8,2018', 100000, 40000],
    //   ['Abril 9,2018', 90000, 20000],
    //   ['Abril 10,2018', 150000, 90000],
    //   ['Abril 11,2018', 100000, 70000],
    //   ['Abril 12,2018', 120000, 50000],
    // ],
    data: this.datos,
    columnNames: ['Fecha', 'Activaciones', 'CambioDN','Otros','Portin'],
    options: {
      colors: ['#62A0D7','#EE8636','#AAAAAA', '#FFC400'],
      isStacked: true,
      bar: { groupWidth: '35%' },
    },
    width: 1400,
    height: 500
  }
  ]

  // offset(offset:number){

  //   this.response=this.http.post('/portabilidad_gral', {sysdate:offset});

  // }
  getData(){
    return this.data;
  }

  getData1(response:any[]) {
    //this.datos=[[]]; Porque rayos no me deja limpiar el array WTF!
    this.datos.splice(0, this.datos.length);
    console.log(this.response);
    response.forEach(element => {
      console.log(element.FECHA_PROCESO);
      let slicedDate=element.FECHA_PROCESO.slice(0,element.FECHA_PROCESO.search("T"));
      this.datos.push([slicedDate,element.ACTIVACIONES,element.CAMBIO_DN,element.OTROS,element.PORTIN]);
    });
    this.datos=this.datos.reverse();
    console.log(this.datos);
  }

  getPosts(offset:number) {//posible solución , corregir post, hacer trim del response
  
    const promise = new Promise<boolean>((resolve, reject) => {
      this.http
        .get(`/portabilidad_lineal_origen_out/${offset}`,{headers:this.headers})
        .toPromise()
        .then((res: any[]) => {
          // Success
          res;
          console.log(res);
          this.getData1(res);
          
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
