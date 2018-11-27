import { Component, OnInit } from '@angular/core';
import {Planet} from '../../../interfaces/planet';
import {Film} from '../../../interfaces/film';
import {People} from '../../../interfaces/people';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {Specie} from '../../../interfaces/specie';

@Component({
  selector: 'app-sw-species-detail',
  templateUrl: './sw-species-detail.component.html',
  styleUrls: ['./sw-species-detail.component.scss']
})
export class SwSpeciesDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/species/';
  private dataDetail: Specie;
  private id: string;

  private films: Film[] = [];
  private residents: People[] = [];

  constructor(private route: ActivatedRoute,
              private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.getCommonData();
  }

  getCommonData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.json.getSpecie(this.url + this.id).subscribe(list => {
      this.dataDetail = list;
      this.getFilms();
      this.getPeople();
    });
  }

  getPeople() {
    this.dataDetail.people.forEach((value) => {
      this.json.getPeople(value).subscribe(list => {
        this.residents.push(list);
      });
    });
  }

  getFilms() {
    this.dataDetail.films.forEach((value) => {
      this.json.getFilm(value).subscribe(list => {
        this.films.push(list);
      });
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }

}
