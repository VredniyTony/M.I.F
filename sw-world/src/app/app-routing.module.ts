import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowListComponent} from './show-list/show-list.component';
import {CategoryResolveService} from './shared/category-resolve.service';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CurrentCategoryComponent} from './current-category/current-category.component';
import {CurrentCategoryResolveService} from './current-category-resolve.service';
import {CurrentItemComponent} from './current-item/current-item.component';
import {CurrentItemResolveService} from './current-item-resolve.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ShowListComponent,
    resolve: {
      category: CategoryResolveService
    },
    children: [{
      path: 'categories',
      component: CategoriesListComponent,
      children: [{
        path: ':id',
        component: CurrentCategoryComponent,
        resolve: {
          categoryContent: CurrentCategoryResolveService
        },
        runGuardsAndResolvers: 'always',
        children: [{
          path: ':item',
          component: CurrentItemComponent,
          resolve: {
            item: CurrentItemResolveService
          }
        }]
      }]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
