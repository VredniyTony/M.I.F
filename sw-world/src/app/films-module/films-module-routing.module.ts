import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmsListComponent} from './films-list/films-list.component';
import {DetailsComponent} from './details/details.component';
import {CurrentItemResolveService} from '../core/resolvers/current-item-resolve.service';
import {CurrentCategoryResolveService} from '../core/resolvers/current-category-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: FilmsListComponent,
    resolve: {
      films: CurrentCategoryResolveService
    }
  },
  {
    path: ':item',
    component: DetailsComponent,
    resolve: {
      details: CurrentItemResolveService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsModuleRoutingModule {
}
