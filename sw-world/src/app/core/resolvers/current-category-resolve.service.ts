import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GetCommonDataService} from '../get-common-data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryResolveService implements Resolve<any> {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = '';
    if (route.parent.queryParams.page !== undefined) {
      page = '?page=' + route.queryParams.page;
    }
    return this.apiService.getCategory(route.parent.routeConfig.path + page);
  }
}
