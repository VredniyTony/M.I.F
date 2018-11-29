import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Peoples} from '../../interfaces/people';
import {Vehicles} from '../../interfaces/vehicle';

@Component({
  selector: 'app-sw-vehicles-detail',
  templateUrl: './sw-vehicles-detail.component.html',
  styleUrls: ['./sw-vehicles-detail.component.scss']
})
export class SwVehiclesDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/vehicles/';
  private id: string;
  private index: number;

  private vehicles: Vehicles[] = [];
  private films: Films[] = [];
  private pilots: Peoples[] = [];

  constructor(private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    // this.getCommonData();
  }

  // getCommonData() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.json.getJson(this.url).subscribe((list: Results) => {
  //     this.vehicles = list.results;
  //     this.index = this.vehicles.findIndex(x => x.url === this.url + this.id + '/');
  //     this.getFilms();
  //     this.getPilots();
  //   });
  // }
  //
  // getPilots() {
  //   this.vehicles[this.index].pilots.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Peoples) => {
  //       this.pilots.push(list);
  //     });
  //   });
  // }
  //
  // getFilms() {
  //   this.vehicles[this.index].films.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Films) => {
  //       this.films.push(list);
  //     });
  //   });
  // }
}
