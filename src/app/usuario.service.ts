import { LoginUsuario } from "./login/login.component";

export class UsuarioService {
  readonly regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

  userList = [
    { correo: "marco.rodas@gmail.com", contrasena: "admin" },
    { correo: "marco.ardp.ims@gmail.com", contrasena: "12345" },
    { correo: "marco.rodas@as-supportpe.com", contrasena: "area51" },
    { correo: "marco.rodas@pucp.pe", contrasena: "skynet" }
  ];

  login(usuario: LoginUsuario): boolean {
    if (!usuario.correo || !this.regexEmail.test(usuario.correo)) {
      usuario.error.mail = "Ingrese un correo válido.";
    }
    if (!usuario.contrasena || !usuario.contrasena.trim()) {
      usuario.error.pass = "Ingrese una contraseña válida.";
    } else if (usuario.contrasena.length < 4) {
      usuario.error.pass = "Ingrese una contraseña con más de 3 caracteres.";
    }
    if (usuario.error.mail || usuario.error.pass) {
      return false;
    }
    for (let user of this.userList) {
      if (
        usuario.correo == user.correo &&
        usuario.contrasena == user.contrasena
      ) {
        return true;
      }
    }
    usuario.error.access = "¡Usuario y/o contraseña inválidos!";
    return false;
  }
}
