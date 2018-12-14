import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmsListComponent} from './films-list/films-list.component';
import {DetailsComponent} from './details/details.component';
import {CurrentCategoryResolveService} from '../core/resolvers/current-category-resolve.service';
import {ResolverService} from './details/resolver.service';

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
      details: ResolverService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsModuleRoutingModule {
}
