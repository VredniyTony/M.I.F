import { Component, OnInit } from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Planets} from '../../interfaces/planet';
import {Species} from '../../interfaces/specie';

@Component({
  selector: 'app-sw-species',
  templateUrl: './sw-species.component.html',
  styleUrls: ['./sw-species.component.scss']
})
export class SwSpeciesComponent implements OnInit {

  private url = 'https://swapi.co/api/species/';
  private data: Species;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getSpecies(this.url).subscribe(list => {
      this.data = list;
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }

}
