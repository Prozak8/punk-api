import { Component, OnInit } from '@angular/core';

import { BeersService } from '../beers.service';

@Component({
  selector: '[app-beers-list]',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  beers;
  currentPage = 1;

  constructor(private _beerService: BeersService) { 
    _beerService.getListOfBeer(
      this.currentPage).subscribe(res => this.beers = res)
  }

  ngOnInit() {}

  previousPage() {
    this.currentPage--
    this._beerService.getListOfBeer(
      this.currentPage).subscribe(res => this.beers = res)
  }

  nextPage() {
    this.currentPage++;
    this._beerService.getListOfBeer(
      this.currentPage).subscribe(res => this.beers = res)
  }
}
