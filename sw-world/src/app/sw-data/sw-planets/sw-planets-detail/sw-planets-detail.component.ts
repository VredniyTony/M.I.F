import {Component, OnInit} from '@angular/core';
import {People} from '../../../interfaces/people';
import {Film} from '../../../interfaces/film';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {Planet} from '../../../interfaces/planet';

@Component({
  selector: 'app-sw-planets-detail',
  templateUrl: './sw-planets-detail.component.html',
  styleUrls: ['./sw-planets-detail.component.scss']
})
export class SwPlanetsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/planets/';
  private dataDetail: Planet;
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
    this.json.getPlanet(this.url + this.id).subscribe(list => {
      this.dataDetail = list;
      this.getFilms();
      this.getResidents();
    });
  }

  getResidents() {
    this.dataDetail.residents.forEach((value) => {
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
