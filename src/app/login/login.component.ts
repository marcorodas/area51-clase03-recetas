import { Component, Output, EventEmitter } from "@angular/core";
import { UsuarioService } from "./../usuario.service";

export class LoginError {
  mail: string;
  pass: string;
  access: string;
}

export class LoginUsuario {
  correo: string;
  contrasena: string;
  error: LoginError = new LoginError();

  setCredentials(correo: string, contrasena: string) {
    this.error.access = "";
    if (correo) {
      this.correo = correo.trim();
      this.error.mail = "";
    } else {
      this.contrasena = contrasena;
      this.error.pass = "";
    }
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  usuario: LoginUsuario = new LoginUsuario();
  constructor(private usuarioService: UsuarioService) {}
  @Output() onLogging = new EventEmitter();

  onMailTyped(e) {
    this.usuario.setCredentials(e.target.value, null);
  }
  onPassTyped(e) {
    this.usuario.setCredentials(null, e.target.value);
  }
  enterKey(event) {
    let element = event.srcElement.nextElementSibling;
    if (element == null) return;
    if (element.type == "button") {
      element.click();
    } else {
      element.focus();
    }
  }
  login() {
    let loginSuccess = this.usuarioService.login(this.usuario);
    if (loginSuccess) {
      this.onLogging.emit(this.usuario.correo);
    }
  }
}
