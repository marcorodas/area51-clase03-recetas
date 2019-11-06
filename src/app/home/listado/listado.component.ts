import { Component } from '@angular/core';
import { RecetaService } from "./../../receta.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  constructor(private recetaService: RecetaService) {}

}