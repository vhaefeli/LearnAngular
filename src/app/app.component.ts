import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
  selector: "app-root", //nom du component qu'il faudra appeler c-est une balise
  // template: `<h1>Lister de Pokémons</h1>`  //on peut mettre notre template complet entre deux `` mais s'il est consistant c-est mieux de le mettre dans un fichier separe
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }
  // methode 1
  // selectPokemon(event: MouseEvent){
  // const index: number = +(event.target as HTMLInputElement).value; // le + cast le retour de l-envent en nombre
  //   console.log(`Vous avey cliqué sur le pokemon ${this.pokemonList[index].name}`);
  // }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    ); // le + cast le text en nombre
    if (pokemon) {
      console.log(`Vous avey demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avey demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
