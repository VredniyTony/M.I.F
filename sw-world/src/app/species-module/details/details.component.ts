import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface Specie {
  details: [{
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    films: [
      { title: string }
      ];
    hair_colors: string;
    homeworld: string;
    language: string;
    name: string;
    people: [
      { name: string }
      ];
    skin_colors: string;
    url: string;
  }];
}

interface CommonData {
  name: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  specie;
  planet;
  films = [];
  people = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: Specie) => {
      this.specie = data.details;
      this.getPlanet();
      this.getFilms();
      this.getPeople();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getPlanet() {
    const url = 'planets/' + this.getItemId(this.specie.homeworld, 2, '/');
    this.apiService.getItem(url).subscribe((data: CommonData) => {
      this.planet = data;
    });
  }

  getFilms() {
    this.specie.films.forEach(url => {
      const filmUrl = 'films/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(filmUrl).subscribe((film: CommonData) => {
        this.films.push(film);
      });
    });
  }

  getPeople() {
    this.specie.people.forEach(url => {
      const peopleUrl = 'people/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(peopleUrl).subscribe((people: CommonData) => {
        this.people.push(people);
      });
    });
  }
}
