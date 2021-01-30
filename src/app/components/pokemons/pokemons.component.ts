import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  public namePokemon: string;
  public pokemon: any = {};
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {

  }

  getPokemons(name: string): void {
    this.pokeService.getPokemons(name).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.getPokemonDescription(this.pokemon.species.url);
      },
      err => {
        console.log(err);
      }
    );
  }

  getPokemonDescription(num: string): void {
    this.pokeService.getPokemonDescription(num).subscribe(
      res => {
        this.pokemon.description = res.flavor_text_entries[1].flavor_text;
      },
      err => {
        console.log(err);
      }
    );
  }
}
