import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent }, //un parametre peut etre mis apres : ->ici :id
  { path: "", redirectTo: "pokemons", pathMatch: "full" }, //route par defaut doit toujours etre en avant dernier
  { path: "**", component: PageNotFoundComponent }, //route qui gere les fausses url doit toujours etre en bas de la liste sinon toute les url seront redirig; sur cette page!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
