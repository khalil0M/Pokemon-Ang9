"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const pokemons_service_1 = require("./pokemons.service");
let EditPokemonComponent = class EditPokemonComponent {
    constructor(route, pokemonsService) {
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.pokemon = null;
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.pokemon = this.pokemonsService.getPokemon(id);
    }
};
EditPokemonComponent = __decorate([
    core_1.Component({
        selector: 'edit-pokemon',
        template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
        <p class="center">
            <img *ngIf="pokemon" [src]="pokemon.picture"/>
        </p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        pokemons_service_1.PokemonsService])
], EditPokemonComponent);
exports.EditPokemonComponent = EditPokemonComponent;
//# sourceMappingURL=edit-pokemon.component.js.map