import {Component, OnInit} from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Films} from '../../interfaces/film';

@Component({
  selector: 'app-sw-films',
  templateUrl: './sw-films.component.html',
  styleUrls: ['./sw-films.component.scss']
})
export class SwFilmsComponent implements OnInit {

  private url = 'https://swapi.co/api/films/';
  public data: Films;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getFilms(this.url).subscribe(list => {
      this.data = list;
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }
}
