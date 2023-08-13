import { InMemoryDataService } from "./in-memory-data.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    PokemonModule,
    AppRoutingModule,
  ],
  // attention! dans le AppRoutingModule il y a la route 404 qui intercepte toutes routes qui n'ont pas ete
  // interceptees avant. il faut donc bien declarer son import en dernier pour que toutes les declarations
  // de routes "correctes" se fassent avant la route 404.
  providers: [],
  bootstrap: [AppComponent], //uniquement dans le composant racine. cela dit quel est le premier fichier a lancer en premier
})
export class AppModule {}
