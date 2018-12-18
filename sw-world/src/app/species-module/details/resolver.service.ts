import {Injectable} from '@angular/core';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {ActivatedRouteSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {isString} from 'util';
import {Specie} from './specie';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getItem(`species/${route.paramMap.get('item')}`)
      .pipe(
        mergeMap((item: Specie) => this.fetchData(item.films)
          .pipe(
            map((films) => {
              item.films = films;
              return item;
            })
          )
        ),
        mergeMap((item: Specie) => this.fetchData(item.homeworld)
          .pipe(
            map((homeworld) => {
              item.homeworld = homeworld;
              return item;
            })
          )
        ),
        mergeMap((item: Specie) => this.fetchData(item.people)
          .pipe(
            map((people) => {
              item.people = people;
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
      return this.apiService.getData(urls, 2, "/");
    }

    return forkJoin(urls
      .map((url) => {
        return this.apiService.getData(url, 2, "/");
      }));
  }
}
