import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "pokemons", pathMatch: "full" }, //route par defaut doit toujours etre en avant dernier
  { path: "**", component: PageNotFoundComponent }, //route 404 qui gere les fausses url doit toujours etre en bas de la liste sinon toute les url seront redirig; sur cette page!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
