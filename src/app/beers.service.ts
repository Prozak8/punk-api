import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private beerUrl = 'https://api.punkapi.com/v2/beers/';
  beers;

  constructor(private _httpClient: HttpClient) { }

  getListOfBeer() {
    return this._httpClient.get(this.beerUrl);
  }
}