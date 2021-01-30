import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPokemons(name: string = null): any {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }
  public getPokemonDescription(url: string = null): any {
    return this.http.get<any>(url);
  }
}
