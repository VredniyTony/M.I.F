import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StarshipsListComponent} from './starships-list/starships-list.component';
import {DetailsComponent} from './details/details.component';
import {CurrentItemResolveService} from '../core/resolvers/current-item-resolve.service';
import {CurrentCategoryResolveService} from '../core/resolvers/current-category-resolve.service';
import {ResolverService} from "./details/resolver.service";

const routes: Routes = [
  {
    path: '',
    component: StarshipsListComponent,
    resolve: {
      starships: CurrentCategoryResolveService
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':item',
    component: DetailsComponent,
    resolve: {
      details: ResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsModuleRoutingModule {
}
