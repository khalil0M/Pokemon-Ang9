import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons'

  
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
})
export class ListPokemonComponent implements OnInit { 
  
  constructor(private router: Router){}

  private pokemons : Pokemon[] = null;
  private title : String = "Pokemons"
 
  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon : Pokemon){
   // alert("Vous avez clic sur : " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
} 