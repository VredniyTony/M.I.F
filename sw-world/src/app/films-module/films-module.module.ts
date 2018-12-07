import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsModuleRoutingModule } from './films-module-routing.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [FilmsListComponent, DetailsComponent],
  imports: [
    CommonModule,
    FilmsModuleRoutingModule
  ]
})
export class FilmsModuleModule { }
