import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GetCommonDataService} from './get-common-data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryResolveService implements Resolve<any> {

  constructor(private apiService: GetCommonDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getCategory(route.paramMap.get('id'));
  }
}
