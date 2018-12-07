import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwSearchComponent} from './sw-search/sw-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {MainPageComponent} from './main-page/main-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NoopInterceptor} from './core/interceptor';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SwSearchComponent,
    NavigationBarComponent,
    MainPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
