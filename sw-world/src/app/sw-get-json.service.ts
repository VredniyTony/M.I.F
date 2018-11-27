import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Nav} from './interfaces/nav';
import {Film, Films} from './interfaces/film';
import {People, Peoples} from './interfaces/people';
import {Planet, Planets} from './interfaces/planet';
import {Specie, Species} from './interfaces/specie';
import {Starship, Starships} from './interfaces/starship';
import {Vehicle, Vehicles} from './interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class SwGetJsonService {

  constructor(private  http: HttpClient) {
  }

  getNav(url) {
    return this.http.get<Nav>(url);
  }

  getFilms(url) {
    return this.http.get<Films>(url);
  }

  getFilm(url) {
    return this.http.get<Film>(url);
  }

  getPeoples(url) {
    return this.http.get<Peoples>(url);
  }

  getPeople(url) {
    return this.http.get<People>(url);
  }

  getPlanets(url) {
    return this.http.get<Planets>(url);
  }

  getPlanet(url) {
    return this.http.get<Planet>(url);
  }

  getSpecies(url) {
    return this.http.get<Species>(url);
  }

  getSpecie(url) {
    return this.http.get<Specie>(url);
  }

  getStarships(url) {
    return this.http.get<Starships>(url);
  }

  getStarship(url) {
    return this.http.get<Starship>(url);
  }

  getVehicles(url) {
    return this.http.get<Vehicles>(url);
  }

  getVehicle(url) {
    return this.http.get<Vehicle>(url);
  }

}
