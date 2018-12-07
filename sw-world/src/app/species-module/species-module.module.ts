import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesModuleRoutingModule } from './species-module-routing.module';
import { SpeciesListComponent } from './species-list/species-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [SpeciesListComponent, DetailsComponent],
  imports: [
    CommonModule,
    SpeciesModuleRoutingModule
  ]
})
export class SpeciesModuleModule { }
