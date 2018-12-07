import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private beerUrl = 'https://api.punkapi.com/v2';

  constructor(private _httpClient: HttpClient) { }

  getListOfBeer(page: number = 1) {
    return this._httpClient.get(`${this.beerUrl}/beers?page=${page}`);
  }
}