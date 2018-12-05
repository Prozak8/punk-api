import { Component } from '@angular/core';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'punk-api';

  constructor(private _beerService: BeersService) {
    
  }
}