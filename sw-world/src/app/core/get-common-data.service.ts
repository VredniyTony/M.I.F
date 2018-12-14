import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, of} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetCommonDataService {

  private url = 'https://swapi.co/api/';

  constructor(private  http: HttpClient) {
  }

  getCategories() {
    return this.http.get(this.url);
  }

  getCategory(id) {
    return this.http.get(this.url + id);
  }

  getItem(item) {
    return this.http.get(this.url + item);
  }

  getData(url) {
    return this.http.get(url);
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }
}
