import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {CurrentItemResolveService} from '../core/resolvers/current-item-resolve.service';
import {DetailsComponent} from './details/details.component';
import {CurrentCategoryResolveService} from '../core/resolvers/current-category-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent,
    resolve: {
      vehicles: CurrentCategoryResolveService
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':item',
    component: DetailsComponent,
    resolve: {
      details: CurrentItemResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesModuleRoutingModule {
}
