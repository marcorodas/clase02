import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioService } from './usuario.service';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { ListaService } from './lista.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, FormularioComponent, ListadoComponent],
  bootstrap:    [ AppComponent ],
  providers: [UsuarioService, ListaService, LoggerService]
})
export class AppModule { }
