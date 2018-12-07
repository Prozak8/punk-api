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