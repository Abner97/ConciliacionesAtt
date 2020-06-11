import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService) { }
  profileForm = new FormGroup({
    user :new FormControl(''),
    password : new FormControl('')
  });
  ngOnInit(): void {
  }
  onSubmit() {
      this._auth.login(this.profileForm.value.user,this.profileForm.value.password);
  }
}
