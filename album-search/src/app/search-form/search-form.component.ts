import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {

  private itunes_url = "https://itunes.apple.com/search?term=jack+johnson";
  private itunes_json: any;
  private deezer_url = "https://api.deezer.com/search?q=eminem";
  private deezer_json: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   }

   search(): void {
    this.itunes_json = this.http.get(this.itunes_url).subscribe(json => console.log(json));;
    // console.log(JSON.stringify(this.itunes_json));

    // this.deezer_json = this.http.get(this.deezer_url).subscribe(json => console.log(json));
    // console.log(JSON.stringify(this.itunes_json));

    console.log("hello");
  }
} 