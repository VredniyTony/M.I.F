import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface Starship {
  details: [{
    MGLT: number;
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: number;
    created: string;
    crew: number;
    edited: string;
    films: [
      { title: string }
      ];
    hyperdrive_rating: string;
    length: number;
    manufacturer: string;
    max_atmosphering_speed: number;
    model: string;
    name: string;
    passengers: number;
    pilots: [
      { name: string }
      ];
    starship_class: string;
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

  starship;
  films = [];
  pilots = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: Starship) => {
      this.starship = data.details;
      this.getFilms();
      this.getPeople();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getFilms() {
    this.starship.films.forEach(url => {
      const filmUrl = 'films/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(filmUrl).subscribe((film: CommonData) => {
        this.films.push(film);
      });
    });
  }

  getPeople() {
    this.starship.pilots.forEach(url => {
      const pilotsUrl = 'people/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(pilotsUrl).subscribe((pilots: CommonData) => {
        this.pilots.push(pilots);
      });
    });
  }
}
