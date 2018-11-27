import { Component, OnInit } from '@angular/core';
import {Specie} from '../../../interfaces/specie';
import {Film} from '../../../interfaces/film';
import {People} from '../../../interfaces/people';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {Starship} from '../../../interfaces/starship';

@Component({
  selector: 'app-sw-starships-detail',
  templateUrl: './sw-starships-detail.component.html',
  styleUrls: ['./sw-starships-detail.component.scss']
})
export class SwStarshipsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/starships/';
  private dataDetail: Starship;
  private id: string;

  private films: Film[] = [];
  private pilots: People[] = [];

  constructor(private route: ActivatedRoute,
              private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.getCommonData();
  }

  getCommonData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.json.getStarship(this.url + this.id).subscribe(list => {
      this.dataDetail = list;
      this.getFilms();
      this.getPilots();
    });
  }

  getPilots() {
    this.dataDetail.pilots.forEach((value) => {
      this.json.getPeople(value).subscribe(list => {
        this.pilots.push(list);
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
