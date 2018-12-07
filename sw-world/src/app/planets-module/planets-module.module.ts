import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsModuleRoutingModule } from './planets-module-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [PlanetsListComponent, DetailsComponent],
  imports: [
    CommonModule,
    PlanetsModuleRoutingModule
  ]
})
export class PlanetsModuleModule { }
