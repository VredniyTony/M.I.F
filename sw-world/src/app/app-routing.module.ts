import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SwFilmsDetailComponent} from './sw-data/sw-films-detail/sw-films-detail.component';
import {SwPeopleDetailComponent} from './sw-data/sw-people-detail/sw-people-detail.component';
import {SwPlanetsDetailComponent} from './sw-data/sw-planets-detail/sw-planets-detail.component';
import {SwSpeciesDetailComponent} from './sw-data/sw-species-detail/sw-species-detail.component';
import {SwStarshipsDetailComponent} from './sw-data/sw-starships-detail/sw-starships-detail.component';
import {SwVehiclesDetailComponent} from './sw-data/sw-vehicles-detail/sw-vehicles-detail.component';
import {ShowListComponent} from './show-list/show-list.component';
import {CategoryResolveService} from './shared/category-resolve.service';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CurrentCategoryComponent} from './current-category/current-category.component';
import {CurrentCategoryResolveService} from './current-category-resolve.service';
import {CurrentItemComponent} from './current-item/current-item.component';
import {CurrentItemResolveService} from './current-item-resolve.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ShowListComponent,
    resolve: {
      category: CategoryResolveService
    },
    children: [{
      path: 'categories',
      component: CategoriesListComponent,
      children: [{
        path: ':id',
        component: CurrentCategoryComponent,
        resolve: {
          categoryContent: CurrentCategoryResolveService
        },
        children: [{
          path: ':item',
          component: CurrentItemComponent,
          resolve: {
            item: CurrentItemResolveService
          }
        }]
      }]
    }]
  },

  // {path: 'films/details/:id', component: SwFilmsDetailComponent},
  // {path: 'people/details/:id', component: SwPeopleDetailComponent},
  // {path: 'planets/details/:id', component: SwPlanetsDetailComponent},
  // {path: 'species/details/:id', component: SwSpeciesDetailComponent},
  // {path: 'starships/details/:id', component: SwStarshipsDetailComponent},
  // {path: 'vehicles/details/:id', component: SwVehiclesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
