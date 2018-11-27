import { Component, OnInit } from '@angular/core';
import {Starship} from '../../../interfaces/starship';
import {Film} from '../../../interfaces/film';
import {People} from '../../../interfaces/people';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {Vehicle} from '../../../interfaces/vehicle';

@Component({
  selector: 'app-sw-vehicles-detail',
  templateUrl: './sw-vehicles-detail.component.html',
  styleUrls: ['./sw-vehicles-detail.component.scss']
})
export class SwVehiclesDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/vehicles/';
  private dataDetail: Vehicle;
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
    this.json.getVehicle(this.url + this.id).subscribe(list => {
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
