import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonClass } from './pokemonClass.model';
import { Cards } from './cards.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
pokemon?: PokemonClass[]
  constructor(private httpService: PokemonService) { }

  ngOnInit() {
    // ne pas oublier les () de la foction fléché
    this.httpService.getPokemon().subscribe((response: Cards) => {
      this.pokemon = response.cards;
    });

  }
}
