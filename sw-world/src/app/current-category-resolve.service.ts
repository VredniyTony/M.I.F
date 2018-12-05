import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GetCommonDataService} from './get-common-data.service';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryResolveService implements Resolve<any> {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = '';
    if (route.queryParams.page !== undefined) {
      page = '?page=' + route.queryParams.page;
    }
    return this.apiService.getCategory(route.paramMap.get('id') + page);
  }
}
