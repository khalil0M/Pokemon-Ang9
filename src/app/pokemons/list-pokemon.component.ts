import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service'
  
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
})
export class ListPokemonComponent implements OnInit { 
  
  constructor(private router: Router, private pokemonsService : PokemonsService ){}

  private pokemons : Pokemon[] = null;
 
  ngOnInit(){
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon : Pokemon){
   // alert("Vous avez clic sur : " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
} 