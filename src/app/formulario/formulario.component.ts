import { Component } from '@angular/core';
import { ListaService } from './../lista.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  savedTxt:string
  constructor(private instancia: ListaService){}
  onTxtTyped(e){
    this.savedTxt = e.target.value.trim()
  }
  agregar(e){
    this.instancia.nombres.push(this.savedTxt)
    let element = e.srcElement.previousElementSibling
    if(element == null) return;
    if(element.type == 'text'){
      element.value = ""
    }
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
}