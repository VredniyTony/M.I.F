import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface People {
  details: [{
    name: string;
    birth_year: string;
    gender: string;
    eye_color: string;
    hair_color: string;
    height: number;
    mass: number;
    created: string;
    edited: string;
    films: [
      { title: string }
      ];
    homeworld: string;
    skin_color: string;
    species: [
      { name: string }
      ];
    starships: [
      { name: string }
      ];
    url: string;
    vehicles: [
      { name: string }
      ];
  }];
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  people;
  planet;
  films = [];
  species = [];
  starships = [];
  vehicles = [];

  loader = 0;

  constructor(private route: ActivatedRoute,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe((data: People) => {
      this.people = data.details;
      this.apiService.getItem(`planets/${this.apiService.getItemId(this.people.homeworld, 2, '/')}`)
        .subscribe(results => {
          this.planet = results;
        });
      this.apiService.getItemList(this.people.films, 'films').subscribe(results => {
        this.films = results;
      });
      this.apiService.getItemList(this.people.species, 'species').subscribe(results => {
        this.species = results;
      });
      this.apiService.getItemList(this.people.starships, 'starships').subscribe(results => {
        this.starships = results;
      });
      this.apiService.getItemList(this.people.vehicles, 'vehicles').subscribe(results => {
        this.vehicles = results;
      });
    });
  }
}
