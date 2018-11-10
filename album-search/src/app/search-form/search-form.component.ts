import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InjectorInstance } from '../app.module';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin'

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
    search_album.set_json();
    search_album.itunes();
    search_album.deezer();
  }
}

export class albums {
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

  get_json(): Observable<any[]> {
      const itunes = this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album");
      const deezer = this.http.get(this.url.deezer + "/search/album?q=" + this.artist);
      return forkJoin([itunes, deezer]);
  }

  async set_json(){
    await this.get_json().subscribe(responseList => {
      this.data.itunes = responseList[0];
      console.log(responseList[0]);
      this.data.deezer = responseList[1];
      console.log(responseList[1]);
    })
  }

  itunes() {
      console.log(this.data.itunes);
  }
  
  deezer() {
    console.log(this.data.deezer);
  }
}