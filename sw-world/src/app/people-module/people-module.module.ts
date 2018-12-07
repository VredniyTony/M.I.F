import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleModuleRoutingModule} from './people-module-routing.module';
import {PeopleListComponent} from './people-list/people-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [PeopleListComponent, DetailsComponent],
  imports: [
    CommonModule,
    PeopleModuleRoutingModule
  ]
})
export class PeopleModuleModule {
}
