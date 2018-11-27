import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwGetJsonService} from '../../../sw-get-json.service';
import {People} from '../../../interfaces/people';
import {Specie} from '../../../interfaces/specie';
import {Starship} from '../../../interfaces/starship';
import {Vehicle} from '../../../interfaces/vehicle';
import {Film} from '../../../interfaces/film';

@Component({
  selector: 'app-sw-people-detail',
  templateUrl: './sw-people-detail.component.html',
  styleUrls: ['./sw-people-detail.component.scss']
})
export class SwPeopleDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/people/';
  private dataDetail: People;
  private id: string;

  private films: Film[] = [];
  private species: Specie[] = [];
  private starships: Starship[] = [];
  private vehicles: Vehicle[] = [];

  constructor(private route: ActivatedRoute,
              private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.getCommonData();
  }

  getCommonData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.json.getPeople(this.url + this.id).subscribe(list => {
      this.dataDetail = list;
      this.getFilms();
      this.getSpecies();
      this.getStarships();
      this.getVehicles();
    });
  }

  getFilms() {
    this.dataDetail.films.forEach((value) => {
      this.json.getFilm(value).subscribe(list => {
        this.films.push(list);
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
