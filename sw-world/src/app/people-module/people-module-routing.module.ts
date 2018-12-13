import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list/people-list.component';
import {DetailsComponent} from './details/details.component';
import {CurrentItemResolveService} from '../core/resolvers/current-item-resolve.service';
import {CurrentCategoryResolveService} from '../core/resolvers/current-category-resolve.service';


const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
    resolve: {
      people: CurrentCategoryResolveService
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':item',
    component: DetailsComponent,
    resolve: {
      details: CurrentItemResolveService
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleModuleRoutingModule {
}
