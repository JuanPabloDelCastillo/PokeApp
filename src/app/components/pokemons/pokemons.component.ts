import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {  
  public namePokemon : string;
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(this.namePokemon);
  }

  getPokemons(name: string){
    this.pokeService.getPokemons(name).subscribe(
      res =>{
        console.log(res)
      },
      err => {

      }      
    );
  }

}
