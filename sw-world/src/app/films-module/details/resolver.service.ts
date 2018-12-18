import {Injectable} from '@angular/core';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {ActivatedRouteSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {isString} from 'util';
import {Film} from './film';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private apiService: GetCommonDataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getItem(`films/${route.paramMap.get('item')}`)
      .pipe(
        mergeMap((item: Film) => this.fetchData(item.characters)
          .pipe(
            map((characters) => {
              item.characters = characters;
              return item;
            })
          )
        ),
        mergeMap((item: Film) => this.fetchData(item.planets)
          .pipe(
            map((planets) => {
              item.planets = planets;
              return item;
            })
          )
        ),
        mergeMap((item: Film) => this.fetchData(item.species)
          .pipe(
            map((species) => {
              item.species = species;
              return item;
            })
          )
        ),
        mergeMap((item: Film) => this.fetchData(item.starships)
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
