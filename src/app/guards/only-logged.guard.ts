import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.logIn()){
      return true;

    }else{
      window.alert("Usted no esta loggeado, por ende no tiene permiso para ver esta pagina");
      this.router.navigate(['login']);
      return false;
    }

  }
  
}
