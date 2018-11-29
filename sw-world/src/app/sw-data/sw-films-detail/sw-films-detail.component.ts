import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Planets} from '../../interfaces/planet';
import {Starships} from '../../interfaces/starship';
import {Peoples} from '../../interfaces/people';
import {Species} from '../../interfaces/specie';
import {Vehicles} from '../../interfaces/vehicle';
import {GetCommonDataService} from '../../get-common-data.service';

@Component({
  selector: 'app-sw-films-detail',
  templateUrl: './sw-films-detail.component.html',
  styleUrls: ['./sw-films-detail.component.scss'],
})

export class SwFilmsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/films/';
  private films: Films[] = [];
  private index: number;
  private characters: Peoples[] = [];
  private planets: Planets[] = [];
  private species: Species[] = [];
  private starships: Starships[] = [];
  private vehicles: Vehicles[] = [];

  private id: string;

  constructor(private route: ActivatedRoute,
              private getData: GetCommonDataService) {
  }

  ngOnInit() {
    // this.getCommonData();
  }


  // getCommonData() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.getData.Json(this.url).subscribe((list: Results) => {
  //     this.films = list.results;
  //     this.index = this.films.findIndex(x => x.url === this.url + this.id + '/');
  // this.getData.getPeoples(this.films[this.index]);
  // this.getCharacters();
  // this.getPlanets();
  // this.getSpecies();
  // this.getStarships();
  // this.getVehicles();
  //   });
  // }

  // getCharacters() {
  //   this.films[this.index].characters.forEach((value) => {
  //     this.getData.Json(value).subscribe((list: Peoples) => {
  //       this.characters.push(list);
  //     });
  //   });
  // }

  // getPlanets() {
  //   this.films[this.index].planets.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Planets) => {
  //       this.planets.push(list);
  //     });
  //   });
  // }
  //
  // getSpecies() {
  //   this.films[this.index].species.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Species) => {
  //       this.species.push(list);
  //     });
  //   });
  // }
  //
  // getStarships() {
  //   this.films[this.index].starships.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Starships) => {
  //       this.starships.push(list);
  //     });
  //   });
  // }
  //
  // getVehicles() {
  //   this.films[this.index].vehicles.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Vehicles) => {
  //       this.vehicles.push(list);
  //     });
  //   });
  // }
}

