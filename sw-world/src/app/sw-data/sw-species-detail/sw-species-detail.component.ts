import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Peoples} from '../../interfaces/people';
import {Species} from '../../interfaces/specie';

@Component({
  selector: 'app-sw-species-detail',
  templateUrl: './sw-species-detail.component.html',
  styleUrls: ['./sw-species-detail.component.scss']
})
export class SwSpeciesDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/species/';
  private id: string;
  private index: number;

  private species: Species[] = [];
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
  //     this.species = list.results;
  //     this.index = this.species.findIndex(x => x.url === this.url + this.id + '/');
  //     this.getFilms();
  //     this.getPeople();
  //   });
  // }
  //
  // getPeople() {
  //   this.species[this.index].people.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Peoples) => {
  //       this.residents.push(list);
  //     });
  //   });
  // }
  //
  // getFilms() {
  //   this.species[this.index].films.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Films) => {
  //       this.films.push(list);
  //     });
  //   });
  // }
}
