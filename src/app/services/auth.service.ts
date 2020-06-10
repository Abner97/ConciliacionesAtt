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
  uri = "http://137.117.78.117:3000";
  token;
  headers = new HttpHeaders({
    'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor(private http: HttpClient,private router: Router) { }
  //Logine
  login(user: string, password: string) {
    /*{//prueba
      localStorage.setItem('auth_token', 'prueba no backend');
      window.location.reload();
      this.router.navigate(['home']);
    }*/

    this.http.post(`${this.uri}/autenticar`, {user: user ,password: password})
    .subscribe((resp: any) => {
      console.log(resp)
      if (resp.mensaje =="Usuario o contraseña incorrectos" ) {
        // si la api regresa el mensaje "Usuario o contraseña incorrectos"
        console.log("Error de authenticacion");
        alert("Usuario o contraseña incorrectos");
        window.location.reload();
    }else if(resp.mensaje =="Autenticación correcta"){
      // si la api regresa el mensaje "Autenticación correcta"
      console.log(resp);
      localStorage.setItem('username', user);
      localStorage.setItem('auth_token', resp.token);
      this.router.navigate(['home']);
      window.location.reload();
      
    }

      })
    
    }
  logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('auth_token');
      this.router.navigate(['login']);
    }
   //Estamos IN?
    logIn(){
      return (localStorage.getItem('auth_token') !== null);
    }
    isLoggedIn(){
      return true;
    }
}
