import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InjectorInstance} from '../app.module';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

//     this.itunes_json = this.http.get(this.itunes_url + "/search?term=" + artist + "&entity=album")
//     .subscribe(json => {
//        json.results.map(cur => {
//          result_itunes.innerText = cur.collectionCensoredName;
//      this.deezer_json = this.http.get(this.deezer_url + "/search/album?q=" + artist)
//      .subscribe(json => {
//       json.data.map(cur => {
//         result_deezer.innerText = cur.title;


export class SearchFormComponent {
  constructor() { }
  
  search() {
    const artist = (document.getElementById("artist_input") as HTMLInputElement)
      .value
      .replace(" ", "+");
      
    let search_album = new albums(artist); 
    search_album.get_json();
    search_album.itunes();
    // search_album.deezer();
  }
}

class albums {
  private artist : string;

  private url = {
    itunes : "https://itunes.apple.com",
    deezer : "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
  }

  private result ={
    itunes : (document.getElementById("itunes_result") as HTMLInputElement),
    deezer : (document.getElementById("deezer_result") as HTMLInputElement)
  }

  private data = {
    itunes : { },
    deezer : { }
  }

  private http : HttpClient;

  constructor(name:string) {
    this.artist = name;
    this.http = InjectorInstance.get<HttpClient>(HttpClient);
  }

  get_json() {
    this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album")
    .subscribe(json => {
      this.data.itunes = json;
      console.log(json);
    });
  }

  itunes() {
    console.log(this.data.itunes);
  }
  
  deezer() {
    console.log(this.data.deezer);
  }
}