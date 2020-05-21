import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons'
  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`,
})
export class AppComponent implements OnInit { 
  

  private pokemons : Pokemon[] = null;
  private title : String = "Pokemons"
  private value : String = '';

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  onClick(){
    console.log("clic");
  }

  onKey(value : string){
    this.value=  'Bonjour '+ value;
  }

  selectPokemon(pokemon : Pokemon){
    alert("Vous avez clic sur : " + pokemon.name);
  }
} 