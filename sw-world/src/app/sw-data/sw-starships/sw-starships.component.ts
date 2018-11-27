import { Component, OnInit } from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Species} from '../../interfaces/specie';
import {Starships} from '../../interfaces/starship';

@Component({
  selector: 'app-sw-starships',
  templateUrl: './sw-starships.component.html',
  styleUrls: ['./sw-starships.component.scss']
})
export class SwStarshipsComponent implements OnInit {

  private url = 'https://swapi.co/api/starships/';
  private data: Starships;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getStarships(this.url).subscribe(list => {
      this.data = list;
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }


}
