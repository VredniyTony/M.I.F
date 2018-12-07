import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsModuleRoutingModule } from './starships-module-routing.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [StarshipsListComponent, DetailsComponent],
  imports: [
    CommonModule,
    StarshipsModuleRoutingModule
  ]
})
export class StarshipsModuleModule { }
