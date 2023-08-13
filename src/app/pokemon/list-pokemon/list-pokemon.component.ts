import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent implements OnInit {
  // pokemonList: Pokemon[] = POKEMONS;
  // => s-il y a une modif par exemple de l-emplacement de POKEMONS, il faudra modifier cette commande
  // dans tous les fichiers donc c-est mieux de passer par un service (voir ligne dans ngOnInit)

  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {} // NE JAMAIS INSTANCIER (avec new) UN SERVICE DANS LE CONSTRUCTEUR!!!

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
