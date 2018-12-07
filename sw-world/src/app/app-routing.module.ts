import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },

  {
    path: 'main',
    component: MainPageComponent,
  },

  {
    path: 'people',
    loadChildren: './people-module/people-module.module#PeopleModuleModule',
  },

  {
    path: 'planets',
    loadChildren: './planets-module/planets-module.module#PlanetsModuleModule',
  },

  {
    path: 'films',
    loadChildren: './films-module/films-module.module#FilmsModuleModule',
  },

  {
    path: 'species',
    loadChildren: './species-module/species-module.module#SpeciesModuleModule',
  },

  {
    path: 'vehicles',
    loadChildren: './vehicles-module/vehicles-module.module#VehiclesModuleModule',
  },

  {
    path: 'starships',
    loadChildren: './starships-module/starships-module.module#StarshipsModuleModule',
  },
  {
    path: 'error/:message',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
