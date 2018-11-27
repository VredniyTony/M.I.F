import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwSearchComponent} from './sw-search/sw-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SwNavMenuComponent} from './sw-nav-menu/sw-nav-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {SwFilmsComponent} from './sw-data/sw-films/sw-films.component';
import {SwPeopleComponent} from './sw-data/sw-people/sw-people.component';
import {SwPlanetsComponent} from './sw-data/sw-planets/sw-planets.component';
import {SwSpeciesComponent} from './sw-data/sw-species/sw-species.component';
import {SwStarshipsComponent} from './sw-data/sw-starships/sw-starships.component';
import {SwVehiclesComponent} from './sw-data/sw-vehicles/sw-vehicles.component';
import {SwFilmsDetailComponent} from './sw-data/sw-films/sw-films-detail/sw-films-detail.component';
import {SwPeopleDetailComponent} from './sw-data/sw-people/sw-people-detail/sw-people-detail.component';
import {SwPlanetsDetailComponent} from './sw-data/sw-planets/sw-planets-detail/sw-planets-detail.component';
import {SwSpeciesDetailComponent} from './sw-data/sw-species/sw-species-detail/sw-species-detail.component';
import {SwStarshipsDetailComponent} from './sw-data/sw-starships/sw-starships-detail/sw-starships-detail.component';
import {SwVehiclesDetailComponent} from './sw-data/sw-vehicles/sw-vehicles-detail/sw-vehicles-detail.component';
import { SwMainPageComponent } from './sw-main-page/sw-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SwSearchComponent,
    SwNavMenuComponent,
    SwFilmsComponent,
    SwPeopleComponent,
    SwPlanetsComponent,
    SwSpeciesComponent,
    SwStarshipsComponent,
    SwVehiclesComponent,
    SwFilmsDetailComponent,
    SwPeopleDetailComponent,
    SwPlanetsDetailComponent,
    SwSpeciesDetailComponent,
    SwStarshipsDetailComponent,
    SwVehiclesDetailComponent,
    SwMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
