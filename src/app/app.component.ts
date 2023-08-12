import { Component } from "@angular/core";

@Component({
  selector: "app-root", //nom du component qu'il faudra appeler c-est une balise
  // template: `<h1>Lister de Pokémons</h1>`  //on peut mettre notre template complet entre deux `` mais s'il est consistant c-est mieux de le mettre dans un fichier separe
  templateUrl: "app.component.html",
})
export class AppComponent {}
