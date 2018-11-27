import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {Film} from '../../../interfaces/film';
import {People} from '../../../interfaces/people';
import {Planet} from '../../../interfaces/planet';
import {Specie} from '../../../interfaces/specie';
import {Vehicle} from '../../../interfaces/vehicle';
import {Starship} from '../../../interfaces/starship';

@Component({
  selector: 'app-sw-films-detail',
  templateUrl: './sw-films-detail.component.html',
  styleUrls: ['./sw-films-detail.component.scss'],
})

export class SwFilmsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/films/';
  private dataDetail: Film;
  private characters: People[] = [];
  private planets: Planet[] = [];
  private species: Specie[] = [];
  private starships: Starship[] = [];
  private vehicles: Vehicle[] = [];

  private id: string;

  constructor(private route: ActivatedRoute,
              private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.getCommonData();
  }

  getCommonData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.json.getFilm(this.url + this.id).subscribe(list => {
      this.dataDetail = list;
      this.getCharacters();
      this.getPlanets();
      this.getSpecies();
      this.getStarships();
      this.getVehicles();
    });
  }

  getCharacters() {
    this.dataDetail.characters.forEach((value) => {
      this.json.getPeople(value).subscribe(list => {
        this.characters.push(list);
      });
    });
  }

  getPlanets() {
    this.dataDetail.planets.forEach((value) => {
      this.json.getPlanet(value).subscribe(list => {
        this.planets.push(list);
      });
    });
  }

  getSpecies() {
    this.dataDetail.species.forEach((value) => {
      this.json.getSpecie(value).subscribe(list => {
        this.species.push(list);
      });
    });
  }

  getStarships() {
    this.dataDetail.starships.forEach((value) => {
      this.json.getStarship(value).subscribe(list => {
        this.starships.push(list);
      });
    });
  }

  getVehicles() {
    this.dataDetail.vehicles.forEach((value) => {
      this.json.getVehicle(value).subscribe(list => {
        this.vehicles.push(list);
      });
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }
}

