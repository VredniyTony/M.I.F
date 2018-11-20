import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs/observable/forkJoin';

interface Itunes {
  results: [{
    collectionName: string;
    collectionViewUrl: string;
    artworkUrl100: string;
  }];
}

interface Deezer {
  data: [{
    title: string;
    link: string;
    cover_medium: string;
  }];
}

interface Result {
  title: string;
  url: string;
  img: string;
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent {

  private artist: string;
  public display: boolean;
  private url = {
    itunes: 'https://itunes.apple.com',
    deezer: 'https://api.deezer.com'
  };

  private urlGet: { [index: string]: string } = {};

  private itunesData: Itunes;
  private deezerData: Deezer;
  private resultData: Result[] = [];

  constructor(private http: HttpClient) {
  }

  search(artist) {
    this.display = false;
    this.artist = artist;
    this.urlGet.itunes = `${this.url.itunes}/search?term=${this.artist}&entity=album`;
    this.urlGet.deezer = `${this.url.deezer}/search/album?q=${this.artist}&output=jsonp`;

    this.setJson().then(() => {
      this.display = true;
      this.setArray();
      console.log(this.resultData);
    });
  }

  setJson() {
    return new Promise((res) => {
      this.getJson().subscribe(responseList => {
        this.itunesData = responseList[0];
        this.deezerData = responseList[1];
        console.log(this.itunesData, this.deezerData);
        res();
      });
    });
  }

  getJson() {
    return forkJoin(this.http.jsonp<Itunes>(this.urlGet.itunes, 'callback'),
      this.http.jsonp<Deezer>(this.urlGet.deezer, 'callback'));
  }

  setArray() {
    (this.itunesData.results).forEach(element => {
      this.resultData.push({
        title: element.collectionName,
        url: element.collectionViewUrl,
        img: element.artworkUrl100
      });
    });

    (this.deezerData.data).forEach(element => {
      this.resultData.push({
        title: element.title,
        url: element.link,
        img: element.cover_medium
      });
    });

    this.resultData.forEach((valFirst, indexFirst) => {
      this.resultData.forEach((valSecond, indexSecond) => {
        if (this.resultData[indexFirst].title === this.resultData[indexSecond].title) {
          this.resultData.splice(indexFirst, 1);
        }
      });
    });
  }
}
