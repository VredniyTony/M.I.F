import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Peoples} from '../../interfaces/people';
import {Planets} from '../../interfaces/planet';

@Component({
  selector: 'app-sw-planets-detail',
  templateUrl: './sw-planets-detail.component.html',
  styleUrls: ['./sw-planets-detail.component.scss']
})
export class SwPlanetsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/planets/';
  private id: string;
  private index: number;

  private planets: Planets[] = [];
  private films: Films[] = [];
  private residents: Peoples[] = [];

  constructor(private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    // this.getCommonData();
  }

  // getCommonData() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.json.getJson(this.url).subscribe((list: Results) => {
  //     this.planets = list.results;
  //     this.index = this.planets.findIndex(x => x.url === this.url + this.id + '/');
  //     this.getFilms();
  //     this.getResidents();
  //   });
  // }
  //
  // getResidents() {
  //   this.planets[this.index].residents.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Peoples) => {
  //       this.residents.push(list);
  //     });
  //   });
  // }
  //
  // getFilms() {
  //   this.planets[this.index].films.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Films) => {
  //       this.films.push(list);
  //     });
  //   });
  // }
}
