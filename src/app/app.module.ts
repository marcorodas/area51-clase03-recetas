import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioService } from './usuario.service';
import { RecetaService } from './receta.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsuarioService, RecetaService]
})
export class AppModule { }
