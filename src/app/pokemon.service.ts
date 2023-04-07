import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from './pokemon-list/cards.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private http: HttpClient) { }
getPokemon(): Observable<Cards> {
  // ne pas oublier le <Cards> sinon ca ne marche pas l'appel va me renvoyer un structure comme Cards
  return this.http.get<Cards>(`https://api.pokemontcg.io/v1/cards`)
}

}
