import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Starships} from '../../interfaces/starship';
import {Peoples} from '../../interfaces/people';
import {Species} from '../../interfaces/specie';
import {Vehicles} from '../../interfaces/vehicle';

@Component({
  selector: 'app-sw-people-detail',
  templateUrl: './sw-people-detail.component.html',
  styleUrls: ['./sw-people-detail.component.scss']
})
export class SwPeopleDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/people/';
  private id: string;
  private index: number;

  private peoples: Peoples[] = [];
  private films: Films[] = [];
  private species: Species[] = [];
  private starships: Starships[] = [];
  private vehicles: Vehicles[] = [];

  constructor(private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    // this.getCommonData();
  }

  // getCommonData() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.json.getJson(this.url).subscribe((list: Results) => {
  //     this.peoples = list.results;
  //     this.index = this.peoples.findIndex(x => x.url === this.url + this.id + '/');
  //     this.getFilms();
  //     this.getSpecies();
  //     this.getStarships();
  //     this.getVehicles();
  //   });
  // }
  //
  // getFilms() {
  //   this.peoples[this.index].films.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Films) => {
  //       this.films.push(list);
  //     });
  //   });
  // }
  //
  // getSpecies() {
  //   this.peoples[this.index].species.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Species) => {
  //       this.species.push(list);
  //     });
  //   });
  // }
  //
  // getStarships() {
  //   this.peoples[this.index].starships.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Starships) => {
  //       this.starships.push(list);
  //     });
  //   });
  // }
  //
  // getVehicles() {
  //   this.peoples[this.index].vehicles.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Vehicles) => {
  //       this.vehicles.push(list);
  //     });
  //   });
  // }
}
