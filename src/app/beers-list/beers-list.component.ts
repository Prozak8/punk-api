import { Component, OnInit } from '@angular/core';

import { BeersService } from '../beers.service';

@Component({
  selector: '[app-beers-list]',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  beers;

  constructor(private _beerService: BeersService) { 
    _beerService.getListOfBeer().subscribe(res => this.beers = res)
  }

  ngOnInit() {
  }

}
