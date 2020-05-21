"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const mock_pokemons_1 = require("./mock-pokemons");
let AppComponent = class AppComponent {
    constructor() {
        this.pokemons = null;
        this.title = "Pokemons";
        this.age = 10;
    }
    ngOnInit() {
        this.pokemons = mock_pokemons_1.POKEMONS;
    }
    selectPokemon(pokemon) {
        alert("Vous avez clic sur : " + pokemon.name);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'pokemon-app',
        templateUrl: `./app/app.component.html`,
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map