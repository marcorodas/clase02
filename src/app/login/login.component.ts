import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail:string
  pass:string
  onMailTyped(e){
    this.mail = e.target.value
  }
  onPassTyped(e){
    this.pass = e.target.value
  }
  login(){
    console.log(this.mail);
    console.log(this.pass);
  }
}