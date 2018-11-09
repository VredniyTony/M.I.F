import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private itunes_url = "https://itunes.apple.com";
  private deezer_url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

  private itunes_json: any;
  private deezer_json: any;

  ngOnInit() {
   }

   search(): void {
    let artist = (document.getElementById("artist_input") as HTMLInputElement).value
    artist = artist.replace(" ", "+");

    this.itunes_json = this.http.get(this.itunes_url + "/search?term=" + artist + "&entity=album").subscribe(json => console.log(json));;
    this.deezer_json = this.http.get(this.deezer_url + "/search/album?q=" + artist).subscribe(json => console.log(json));

  }
} 