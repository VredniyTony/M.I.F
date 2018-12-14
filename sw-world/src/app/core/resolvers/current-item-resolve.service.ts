import {Injectable} from '@angular/core';
import {GetCommonDataService} from '../get-common-data.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CurrentItemResolveService implements Resolve<any> {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getItem(route.parent.routeConfig.path + '/' + route.paramMap.get('item'));
  }
}
