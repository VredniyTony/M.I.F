import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesModuleRoutingModule } from './vehicles-module-routing.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [VehiclesListComponent, DetailsComponent],
  imports: [
    CommonModule,
    VehiclesModuleRoutingModule
  ]
})
export class VehiclesModuleModule { }
