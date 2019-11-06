import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mailApp:string
  logginSuccess: boolean = true

  doLogin(event){
    this.logginSuccess = true
    this.mailApp = event
  }

  doLogout(){
    this.logginSuccess = false
  }
}