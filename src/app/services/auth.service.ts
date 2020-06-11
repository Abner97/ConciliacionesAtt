/**
* Esta modulo es el que verifica del lado del Frontend que el usuario y contraseña ingresados
* sean los correctos.
*
* Hace una petición Http POST a la Api alojada en Azure, en el body va el usuario y la contraseña a validar.
* Se usa localstorage para guardar el nombre se usuario y el token de autenticación que devuelve la Api por medio de JWT
*
* @author Ricardo Martinez y Abraham Vega
* @date 10-06-2020
*/



import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,


  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "http://137.117.78.117:3000";//Direccion ip de la Api alojada en Aure (cambiar por la de la empresa)
  headers = new HttpHeaders({
    'Content-Type': 'application/json' });
  options = { headers: this.headers };

  /**
   * Constructor de la clase.
   * 
   * @param http - Objeto tipo HttpClient para poder hacer peticiones a la API
   * @param router - objeto que permite navegar a home si el usuario es correcto y la pagina de login si no lo es.
   * 
   * 
   */
  constructor(private http: HttpClient,private router: Router) { 

  }
  //Logine

  /**
   * Función que valida usuario y contraseña
   * 
   * @param user - nombre de usuario
   * @param password - contraseña del usuario.
   * 
   * 
   */
  login(user: string, password: string) {
   

    this.http.post(`${this.uri}/autenticar`, {user: user ,password: password})//se hace post a la Api con el usuario y contraseña
    .subscribe((resp: any) => {
      console.log(resp)

      if (resp.mensaje =="Usuario o contraseña incorrectos" ) {
         // si la api regresa el mensaje "Usuario o contraseña incorrectos"
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña o usuario incorrectos',
        })

        
    }else if(resp.mensaje =="Autenticación correcta"){
      // si la api regresa el mensaje "Autenticación correcta"
      localStorage.setItem('username', user);
      localStorage.setItem('auth_token', resp.token);
      this.router.navigate(['home']);
      window.location.reload();

      Toast.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso'
      })
      
    }

      })
    }
    
  logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('auth_token');
      localStorage.setItem('TelcelOut',"0");
      localStorage.removeItem('TelcelOut');
      localStorage.setItem('TelcelIn',"0");
      localStorage.removeItem('TelcelIn');
      localStorage.setItem('MovistarOut',"0");
      localStorage.removeItem('MovistarOut');
      localStorage.setItem('MovistarIn',"0");
      localStorage.removeItem('MovistarIn');
      localStorage.setItem('NextelIn',"0");
      localStorage.removeItem('NextelIn');
      this.router.navigate(['login']);
    }

  /**
   * Función que verifica si estamos logueados
   */
    logIn(){
      return (localStorage.getItem('auth_token') !== null);
    }

    isLoggedIn(){
      return true;
    }
}
