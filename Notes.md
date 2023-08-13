# INFOS DIVERSES


## les commandes utilisees dans le terminal:

### voir ce que la commande créerait comme fichier sans le faire vraiment
  "la commande" --dry-run

### pour créer le nouveau dossier

    ng new ng-pokemon-app --minimal --style=css

--minimal créer un dossier "light" et --style=css défini le langage du style ' css'

dans tsconfig.json rajouter sous strict (ligne8):

    "strictPropertyInitialization": false,

permet de pouvoir déclarer des valeurs non initialisées sans avoir besoin de rajouter le undefined


### POUR LANCER LE SERVEUR> 
    ng serve

=> localhost:4200


### directive = class sans template
    ng generate directive border-card

->fichier avec decorateur @Directive

### créer des pipe personnalisés:
    ng g pipe pokemon-type-color

->fichier avec decorateur @Pipe

### créer un nouveau component
    ng g component list-pokemon --inline-template=false

->nouveau dossier avec fichier avec decorateur @Component + un fichier .html 

--inline-template=false > on a créer une version light de notre projet donc pour qu-angular créer quand meme tous les fichiers relatifs a un nouveau composant on doit mettre cette commande.

### nouveau module
    ng g module pokemon

->nouveau dossier avec fichier "nomdumodule".module.ts avec decorateur @NgModule


### nouveau service
    ng g service pokemon/pokemon

-> créer le service pokemon dans le dossier pockemon

->@Injectable
#### si on veut que le service soit accessible à toute l'app'
    @Injectable({
      //le decorateur Injectable indique que ce service peut avoir des dependance
      providedIn: "root", // garantit qu-on a la meme instance du service a travers toute l-application
    })

#### si on veut que le service soit accessible que par un module
    @Injectable()
dans le fichier `nomDuModule`.module.ts rajouter apres les imports:
    providers: [NomDuServiceService]


## noouveau formulaire
nouvelles directives: NgForm et NgModel de @angular/forms


rajouter dans les imports des module.ts concerne le: FormsModule

puis creer un nouveau composant:
    ng g component pokemon/pokemon-form --inline-template=false





## quelques infos en plus

dans un composant> PAS DE CONSTRUCTEUR DANS 99% des cas. les variable s'initialise plutôt dans le ngOnInit!!!!!

    <p *ngIf="pokemonSelected">
      vous avez selectionne le pokemon: {{pokemonSelected?.name}}
    </p>
    <p *ngIf="!pokemonSelected">
      aucun pokemon n'a ete trouve
    </p>
    
    <p *ngFor="let pokemon of pokemonList">
      {{ pokemon.name}}
    </p>

## + caste un string en nombre


## materialize
une row fait 12 unites donc si les colonnes font 4 alors sur un ecran medium (m) il y aura 3 colonnes
`<div class="col s12 m8 offset-m2"> `
l-objet prend: 
si c'est un petit écran (s) -> tout l'écran = 12 colonnes
si c'est un écran moyen (type écran d'ordi standard) -> 8 colonnes avec un décalage de 2 colonnes = sera centré sur la page


pattern="^[a-zA-Z0-9àéèç]{1,25}$" => entre 1 et 25 lettres et chiffre et lettres accentuees


##qq fonctions et atributs

    <div [hidden]="name.valid || name.pristine"
                class="card-panel red accent-1">
                Le nom du pokémon est requis (1-25).
          </div>

cache le message si le nom entré est correct (.valid) ou si aucune modification du champs n-a encore été faite (.pristine)
