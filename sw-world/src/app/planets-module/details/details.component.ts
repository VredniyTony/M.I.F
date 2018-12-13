import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface Planet {
  details: [{
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: [
      { name: string }
      ];
    films: [
      { title: string }
      ];
    created: string;
    edited: string;
    url: string;
  }];
}

interface CommonData {
  name: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  planet;
  films = [];
  residents = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: Planet) => {
      this.planet = data.details;
      this.getFilms();
      this.getPeople();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getFilms() {
    this.planet.films.forEach(url => {
      const filmUrl = 'films/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(filmUrl).subscribe((film: CommonData) => {
        this.films.push(film);
      });
    });
  }

  getPeople() {
    this.planet.residents.forEach(url => {
      const residentsUrl = 'people/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(residentsUrl).subscribe((residents: CommonData) => {
        this.residents.push(residents);
      });
    });
  }
}
