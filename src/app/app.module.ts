import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeersListControlsComponent } from './beers-list-controls/beers-list-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeersListControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
