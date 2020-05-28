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


class Post {
  constructor(@Inject(String)
    public fechaProceso: string,
    @Inject(Number)
    public portOut:number,
    @Inject(Number)
    public portIn: number,
    
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class InOutDataService {

  constructor(private http: HttpClient) { }

  uri = "apiattsmc.eastus.cloudapp.azure.com:3000";
  token;
  response:any[]=[];
  datos:any[]=[['Abril 1,2018', 100000, 30000]];
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'access-token': localStorage.auth_token
  });

  // options:HttpHeader = { headers: this.headers };

  
  private data: charData[] = [{
    title: 'Bill Cycle Acumlado por dia 2018',
    type: 'Line',
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
    columnNames: ['Fecha', 'In', 'Out'],
    options: {
      colors: ['green', 'red', 'blue'],
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
    response.forEach(element => {
      console.log(element);
      this.datos.push([element.fechaProceso,element.portOut,element.portIn]);
    });
    console.log(this.datos);
  }

  getPosts(offset:number) {//posible solución , corregir post, hacer trim del response
  
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<Post[]>(`/portabilidad_gral/${offset}`,{headers:this.headers})
        .toPromise()
        .then((res: any[]) => {
          // Success
    
          this.response = res.map((res: any) => {
            return new Post(
              res.FECHAPROCESO,
              res.PORTOUT,
              res.PORTIN,
              
            );
          });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    console.log(this.response);
    this.getData1(this.response);
    
  }




  
}
