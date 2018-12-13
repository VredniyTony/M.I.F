import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {forkJoin} from 'rxjs';

interface Film {
  details: [{
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
    characters: [
      { name: string }
      ];
    edited: string;
    planets: [
      { name: string }
      ];
    species: [
      { name: string }
      ];
    starships: [
      { name: string }
      ];
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

  film;
  characters = [];
  planets = [];
  species = [];
  starships = [];
  vehicles = [];

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data: Film) => {
      this.film = data.details;
      this.getItems(this.film.characters, 'people').subscribe(results => {
        this.characters = results;
      });
      this.getItems(this.film.planets, 'planets').subscribe(results => {
        this.planets = results;
      });
      this.getItems(this.film.species, 'species').subscribe(results => {
        this.species = results;
      });
      this.getItems(this.film.starships, 'starships').subscribe(results => {
        this.starships = results;
      });
      this.getItems(this.film.vehicles, 'vehicles').subscribe(results => {
        this.vehicles = results;
      });
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  getItems(urls, category) {
    const dataUrls = [];
    urls.forEach(url => {
      dataUrls.push(this.apiService.getItem(`${category}/${this.getItemId(url, 2, '/')}`));
    });
    return forkJoin(dataUrls);
  }
}
