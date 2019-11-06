import { Component } from "@angular/core";
import { RecetaService } from "./../../receta.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent {
  
  constructor(private recetaService: RecetaService) {}

  onTitleTyped(e) {
    this.recetaService.titulo = e.target.value.trim();
    this.recetaService.errorTitle = "";
  }

  onDescTyped(e) {
    this.recetaService.descripcion = e.target.value.trim();
    this.recetaService.errorDesc = "";
  }

  agregar() {    
    this.recetaService.add();
  }
}
