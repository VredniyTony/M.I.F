import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

interface Vehicle {
  details: [{
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: number;
    created: string;
    crew: number;
    edited: string;
    films: [
      { title: string }
      ];
    length: string;
    manufacturer: string;
    max_atmosphering_speed: number;
    model: string;
    name: string;
    passengers: number;
    pilots: [
      { name: string }
      ];
    url: string;
    vehicle_class: string;
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

  vehicle;
  films = [];
  pilots = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: Vehicle) => {
      this.vehicle = data.details;
      this.getFilms();
      this.getPeople();
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getFilms() {
    this.vehicle.films.forEach(url => {
      const filmUrl = 'films/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(filmUrl).subscribe((film: CommonData) => {
        this.films.push(film);
      });
    });
  }

  getPeople() {
    this.vehicle.pilots.forEach(url => {
      const pilotsUrl = 'people/' + this.getItemId(url, 2, '/');
      this.apiService.getItem(pilotsUrl).subscribe((pilots: CommonData) => {
        this.pilots.push(pilots);
      });
    });
  }
}
