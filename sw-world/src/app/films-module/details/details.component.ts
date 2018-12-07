import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface Film {
  details: [{
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
    characters: [
      { name: string }
      ];
    edited: string;
    planets: [
      { name: string }
      ];
    species: [
      { name: string }
      ];
    starships: [
      { name: string }
      ];
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

  film;
  characters = [];
  planets = [];
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
    this.route.data.subscribe((data: Film) => {
      this.film = data.details;
      this.getPeople();
      this.getPlanets();
      this.getSpecies();
      this.getStarships();
      this.getVehicles();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getPeople() {
    this.film.characters.forEach(url => {
      const charactersUrl = 'people/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(charactersUrl).subscribe((people: CommonData) => {
        this.characters.push(people);
      });
    });
  }

  getPlanets() {
    this.film.planets.forEach(url => {
      const planetsUrl = 'planets/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(planetsUrl).subscribe((planet: CommonData) => {
        this.planets.push(planet);
      });
    });
  }

  getSpecies() {
    this.film.species.forEach(url => {
      const speciesUrl = 'species/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(speciesUrl).subscribe((specie: CommonData) => {
        this.species.push(specie);
      });
    });
  }

  getStarships() {
    this.film.starships.forEach(url => {
      const starshipsUrl = 'starships/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(starshipsUrl).subscribe((starship: CommonData) => {
        this.starships.push(starship);
      });
    });
  }

  getVehicles() {
    this.film.vehicles.forEach(url => {
      const vehicleUrl = 'vehicles/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(vehicleUrl).subscribe((vehicle: CommonData) => {
        this.vehicles.push(vehicle);
      });
    });
  }
}
