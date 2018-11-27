import {Component, OnInit} from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Planets} from '../../interfaces/planet';

@Component({
  selector: 'app-sw-planets',
  templateUrl: './sw-planets.component.html',
  styleUrls: ['./sw-planets.component.scss']
})
export class SwPlanetsComponent implements OnInit {

  private url = 'https://swapi.co/api/planets/';
  private data: Planets;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getPlanets(this.url).subscribe(list => {
      this.data = list;
      console.log('planets', this.data);
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }
}
