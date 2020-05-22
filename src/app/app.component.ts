import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _auth: AuthService){}
  user="sudonym";
  password="att12345678?";
    ngOnInit(): void {
      console.log("Aquiandamos");
      this._auth.login(this.user,this.password);
      this.sesion=this._auth.logIn();
    }
    
  title = 'spa';
  sesion: boolean;
}
