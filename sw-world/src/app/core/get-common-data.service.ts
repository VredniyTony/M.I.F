import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';

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

  getItemList(urls, category) {
    const dataUrls = [];
    urls.forEach(url => {
      dataUrls.push(this.getItem(`${category}/${this.getItemId(url, 2, '/')}`));
    });
    return forkJoin(dataUrls);
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }
}
