import { Component, OnInit } from '@angular/core';
import { ListaService } from './../lista.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  constructor(private instancia: ListaService){}
}