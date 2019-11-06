import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @Input() mailHome:string
  @Output() onLogout = new EventEmitter()
  displayFrame:boolean = false
  lista: Array<string> = ["Carmen", "Marcela", "Oscar", "Eduardo"]
  
  constructor(private instancia:UsuarioService){}

  logout(){
    this.onLogout.emit();
  }
}