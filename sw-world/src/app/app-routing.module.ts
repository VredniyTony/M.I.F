import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
import {SwMainPageComponent} from './sw-main-page/sw-main-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
  {path: 'mainPage', component: SwMainPageComponent},

  {path: 'films', component: SwFilmsComponent},
  {path: 'films/details/:id', component: SwFilmsDetailComponent},

  {path: 'people', component: SwPeopleComponent},
  {path: 'people/details/:id', component: SwPeopleDetailComponent},

  {path: 'planets', component: SwPlanetsComponent},
  {path: 'planets/details/:id', component: SwPlanetsDetailComponent},

  {path: 'species', component: SwSpeciesComponent},
  {path: 'species/details/:id', component: SwSpeciesDetailComponent},

  {path: 'starships', component: SwStarshipsComponent},
  {path: 'starships/details/:id', component: SwStarshipsDetailComponent},

  {path: 'vehicles', component: SwVehiclesComponent},
  {path: 'vehicles/details/:id', component: SwVehiclesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
