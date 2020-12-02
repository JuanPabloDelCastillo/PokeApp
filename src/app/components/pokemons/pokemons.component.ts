import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {  
  public namePokemon : string;
  public pokemon: any = {};
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
   
  }

  getPokemons(name: string){
    this.pokeService.getPokemons(name).subscribe(
      res =>{
        console.log(res);
        this.pokemon = res;
      },
      err => {
        console.log(err);
      }      
    );    
  }

  

}
