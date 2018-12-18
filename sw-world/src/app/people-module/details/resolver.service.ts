import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {isString} from 'util';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {People} from './people';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getItem(`people/${route.paramMap.get('item')}`)
      .pipe(
        mergeMap((item: People) => this.fetchData(item.films)
          .pipe(
            map((films) => {
              item.films = films;
              return item;
            })
          )
        ),
        mergeMap((item: People) => this.fetchData(item.homeworld)
          .pipe(
            map((homeworld) => {
              item.homeworld = homeworld;
              return item;
            })
          )
        ),
        mergeMap((item: People) => this.fetchData(item.species)
          .pipe(
            map((species) => {
              item.species = species;
              return item;
            })
          )
        ),
        mergeMap((item: People) => this.fetchData(item.starships)
          .pipe(
            map((starships) => {
              item.starships = starships;
              return item;
            })
          )
        ),
        mergeMap((item) => this.fetchData(item.vehicles)
          .pipe(
            map((vehicles) => {
              item.vehicles = vehicles;
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
