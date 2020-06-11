import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})


export class UserInfoComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  handleCerrarSesion($event){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Swal.fire({
      title: 'Estás seguro de cerrar sesión',
      text: "Se redireccionará al inicio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('username');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('TelcelOut');
        localStorage.removeItem('TelcelIn');
        localStorage.removeItem('MovistarOut');
        localStorage.removeItem('MovistarIn');
        localStorage.removeItem('NextelIn');
      this.router.navigate(['login']);
        
        Toast.fire({
          icon: 'warning',
          title: 'Sesión finalizada'
        })

        window.location.reload();
      }
    })
  }

  getUser(){
    return(localStorage.getItem('username'))
  }
}
