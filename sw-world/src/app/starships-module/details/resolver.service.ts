import { Injectable } from '@angular/core';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {ActivatedRouteSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {isString} from 'util';
import {Starship} from './starship';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getItem(`starships/${route.paramMap.get('item')}`)
      .pipe(
        mergeMap((item: Starship) => this.fetchData(item.films)
          .pipe(
            map((films) => {
              item.films = films;
              return item;
            })
          )
        ),
        mergeMap((item: Starship) => this.fetchData(item.pilots)
          .pipe(
            map((pilots) => {
              item.pilots = pilots;
              return item;
            })
          )
        )
      );
  }

  fetchData(urls) {
    if (!urls.length) {
      return of([]);
    }

    if (isString(urls)) {
      return this.apiService.getData(urls, 2, '/');
    }

    return forkJoin(urls
      .map((url) => {
        return this.apiService.getData(url, 2, '/');
      }));
  }
}
