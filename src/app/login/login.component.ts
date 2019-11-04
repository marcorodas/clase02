import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail:string
  pass:string
  errorMail:string
  errorPass:string
  @Output() onLogging = new EventEmitter()

  onMailTyped(e){
    this.mail = e.target.value.trim()
    this.errorMail = ''
  }
  onPassTyped(e){
    this.pass = e.target.value
    this.errorPass = ''
  }
  enterKey(event){
    let element = event.srcElement.nextElementSibling;
    if(element == null) return;
    if(element.type == 'button'){
      element.click()
    }else{
      element.focus()
    }
  }
  login(){ 
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if(!this.mail || !regexEmail.test(this.mail)){
      this.errorMail = 'Ingrese un correo válido.'
    }
    if(!this.pass || !this.pass.trim()){
      this.errorPass = 'Ingrese una contraseña válida.'
    } else if(this.pass.length < 4){
      this.errorPass = 'Ingrese una contraseña con más de 3 caracteres.'
    }
    if(!this.errorMail && !this.errorPass){
      this.onLogging.emit(this.mail)
    }
  }  
}