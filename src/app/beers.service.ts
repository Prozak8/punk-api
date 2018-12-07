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
    return this._httpClient.get(this.beerUrl).subscribe(
      res => {
         this.beers = res;
    });
  }
}


// export class AppComponent {
//   title;

//   constructor(private http: HttpClient) {
//     // this.title = _beerService.getListOfBeers();
//   }

//   ngOnInit(): void {
//     this.http.get('https://api.punkapi.com/v2/beers')
//       .subscribe(data => {
//         this.title = data[5]["name"];
//       },
//         (error) => {
//           debugger;
//           console.log(error)
//         }
//       );
//   }
//   myFunction() {
//     console.log(this.title)
//   }
// }