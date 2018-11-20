import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent {

  private artist: string;
  public display;
  private url = {
    itunes: 'https://itunes.apple.com',
    deezer: 'https://api.deezer.com'
  };

  private urlGet: { [key: string]: string } = {};
  private data: { [key: string]: object } = {};
  private resultData = [];

  constructor(private http: HttpClient) {
  }

  search(artist) {
    this.display = false;
    this.artist = artist;
    this.urlGet.itunes = `${this.url.itunes}/search?term=${this.artist}&entity=album`;
    this.urlGet.deezer = `${this.url.deezer}/search/album?q=${this.artist}
    &output=jsonp`;
    // &access_token=frQcuJMQAi0X6CwhOg1q3dtZpASWHONY5muC8IR5AIWm8lnEMZ&expires=0

    this.setJson().then(() => {
      this.display = true;
      this.setArray();
    });
  }

  getJson(): Observable<any[]> {
    return forkJoin([this.http.get(this.urlGet.itunes), this.http.get(this.urlGet.deezer)]);
  }

  setJson() {
    return new Promise((res) => {
      this.getJson().subscribe(responseList => {
        this.data.itunes = responseList[0];
          this.data.deezer = responseList[1];

        console.log(this.data.itunes, this.data.deezer);
        res();
      });
    });
  }

  setArray() {
    (this.data.itunes.results).forEach(element => {
      this.resultData.push({
        title: element.collectionName,
        url: element.collectionViewUrl,
        img: element.artworkUrl100
      });
    });

    console.log(this.resultData);

    (this.data.itunes.data).forEach(element => {
      this.resultData.push({
        title: element.title,
        url: element.link,
        img: element.cover_medium
      });
    });

    for (let i = 0; i < (this.resultData.push).length; i++) {
      let element = this.resultData[i].title;
      for (let j = i; j < (this.resultData.push).length; j++) {
        if (element === this.resultData[j].title) {
          (this.resultData).splice(j, 1);
        }
      }
    }
    console.log(this.resultData);
  }
}
