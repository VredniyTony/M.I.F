import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwSearchComponent} from './sw-search/sw-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SwFilmsDetailComponent} from './current-item/sw-films-detail/sw-films-detail.component';
import {SwPeopleDetailComponent} from './current-item/sw-people-detail/sw-people-detail.component';
import {SwPlanetsDetailComponent} from './current-item/sw-planets-detail/sw-planets-detail.component';
import {SwSpeciesDetailComponent} from './current-item/sw-species-detail/sw-species-detail.component';
import {SwStarshipsDetailComponent} from './current-item/sw-starships-detail/sw-starships-detail.component';
import {SwVehiclesDetailComponent} from './current-item/sw-vehicles-detail/sw-vehicles-detail.component';
import {ShowListComponent} from './show-list/show-list.component';
import {SharedModule} from './shared/shared.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { CurrentItemComponent } from './current-item/current-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SwSearchComponent,
    SwFilmsDetailComponent,
    SwPeopleDetailComponent,
    SwPlanetsDetailComponent,
    SwSpeciesDetailComponent,
    SwStarshipsDetailComponent,
    SwVehiclesDetailComponent,
    ShowListComponent,
    CategoriesListComponent,
    CurrentCategoryComponent,
    CurrentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
