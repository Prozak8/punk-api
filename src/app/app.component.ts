import { Component } from '@angular/core';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  beers;

  constructor(private _beerService: BeersService) {
    _beerService.getListOfBeer().subscribe(res => this.beers = res)
  }
}

// import { Component } from '@angular/core';
// import { BeersService } from './beers.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
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