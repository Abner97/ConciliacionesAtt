import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "apiattsmc.eastus.cloudapp.azure.com:3000";
  token;
  headers = new HttpHeaders({
    'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor(private http: HttpClient,private router: Router) { }
  //Login
  login(user: string, password: string) {
    this.http.post('/autenticar', {user: "sudonym",password:"att12345678?"})
    .subscribe((resp: any) => {
     
      localStorage.setItem('auth_token', resp.token);
      this.router.navigate(['home']);
      })
      
       
    }
    logout() {
      localStorage.removeItem('auth_token');
      this.router.navigate(['login'])
    }
   //Estamos IN?
    logIn(){
      return (localStorage.getItem('auth_token') !== null);
    }
    isLoggedIn(){
      return true;
    }
}
