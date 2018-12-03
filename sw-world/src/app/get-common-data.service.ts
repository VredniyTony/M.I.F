import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    console.log(this.url + item);
    return this.http.get(this.url + item);
  }
}
