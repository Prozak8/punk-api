import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeersService {
  beers: Object;
  beerUrl = 'https://api.punkapi.com/v2/beers/';

  constructor(private _httpClient: HttpClient) { 
    this.getListOfBeer()
  }

  getListOfBeer() {
    return this._httpClient.get(this.beerUrl).subscribe((res) => {
      debugger;
      this.beers = res;
    });
  }
}
