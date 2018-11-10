import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';

import { HttpClientModule } from '@angular/common/http';
import {Injector} from '@angular/core';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) 
  {
    InjectorInstance = this.injector;
  }
}
