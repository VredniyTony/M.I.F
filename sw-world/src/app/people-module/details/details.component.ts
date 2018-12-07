import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface People {
  details: [{
    name: string;
    birth_year: string;
    gender: string;
    eye_color: string;
    hair_color: string;
    height: number;
    mass: number;
    created: string;
    edited: string;
    films: [
      { title: string }
      ];
    homeworld: string;
    skin_color: string;
    species: [
      { name: string }
      ];
    starships: [
      { name: string }
      ];
    url: string;
    vehicles: [
      { name: string }
      ];
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

  people;
  planet;
  films = [];
  species = [];
  starships = [];
  vehicles = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: People) => {
      this.people = data.details;
      this.getPlanet();
      this.getFilms();
      this.getSpecies();
      this.getStarships();
      this.getVehicles();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getPlanet() {
    const url = 'planets/' + this.getItemId(this.people.homeworld, 2, '/');
    this.apiService.getItem(url).subscribe((data: CommonData) => {
      this.planet = data;
    });
  }

  getFilms() {
    this.people.films.forEach(url => {
      const filmUrl = 'films/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(filmUrl).subscribe((film: CommonData) => {
        this.films.push(film);
      });
    });
  }

  getSpecies() {
    this.people.species.forEach(url => {
      const specieUrl = 'species/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(specieUrl).subscribe((specie: CommonData) => {
        this.species.push(specie);
      });
    });
  }

  getStarships() {
    this.people.starships.forEach(url => {
      const starshipUrl = 'starships/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(starshipUrl).subscribe((starship: CommonData) => {
        this.starships.push(starship);
      });
    });
  }

  getVehicles() {
    this.people.vehicles.forEach(url => {
      const vehicleUrl = 'vehicles/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(vehicleUrl).subscribe((vehicle: CommonData) => {
        this.vehicles.push(vehicle);
      });
    });
  }
}
