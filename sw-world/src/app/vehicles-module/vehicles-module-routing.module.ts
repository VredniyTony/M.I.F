import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {CurrentItemResolveService} from '../core/current-item-resolve.service';
import {DetailsComponent} from './details/details.component';
import {CurrentCategoryResolveService} from '../core/current-category-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent,
    resolve: {
      vehicles: CurrentCategoryResolveService
    },
    runGuardsAndResolvers: 'always'
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
export class VehiclesModuleRoutingModule { }
