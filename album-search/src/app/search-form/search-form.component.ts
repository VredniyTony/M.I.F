import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent {

  private artist : string;
  public display;
  private url = {
    itunes : "https://itunes.apple.com",
    deezer : "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
  }
  private data = {
    itunes : {},
    deezer : {}
  }

  constructor(private http : HttpClient) {}

  search(artist) {
    let self = this;
    this.artist = artist.value;
     this.setJson().then(function() {
      self.display = true;
      console.log(self.data.itunes);
      console.log(self.data.deezer);  
     });
   }

  getJson(): Observable<any[]> {
    return forkJoin(
      [this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album"),
      this.http.get(this.url.deezer + "/search/album?q=" + this.artist)]
      );
  }
  setJson(){
    return new Promise((res) => {
        this.getJson().subscribe(responseList => {
        this.data.itunes = responseList[0];
        this.data.deezer = responseList[1];
        res(); 
        })
    });
  }
}