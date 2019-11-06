import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UsuarioService{
  correo: string
  contrasena: string

  constructor(private loggerService: LoggerService){}

  loginUsuario(){
    this.loggerService.mostrarMensaje("Usuario logueado")
  }
}