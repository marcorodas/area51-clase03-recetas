export class RecetaService {
  titulo: string;
  descripcion: string;
  errorTitle: string;
  errorDesc: string;
  recipeList = [];

  add() {
    if (!this.titulo) {
      this.errorTitle = "El título no puede ser vacío.";
    }
    if (!this.descripcion) {
      this.errorDesc = "La descripción no puede ser vacía.";
    }
    if (this.titulo && this.descripcion) {
      this.recipeList.push({
        titulo: this.titulo,
        descripcion: this.descripcion
      });
    }
  }
}
