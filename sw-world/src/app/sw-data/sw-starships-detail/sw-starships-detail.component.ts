import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Films} from '../../interfaces/film';
import {Starships} from '../../interfaces/starship';
import {Peoples} from '../../interfaces/people';

@Component({
  selector: 'app-sw-starships-detail',
  templateUrl: './sw-starships-detail.component.html',
  styleUrls: ['./sw-starships-detail.component.scss']
})
export class SwStarshipsDetailComponent implements OnInit {

  private url = 'https://swapi.co/api/starships/';
  private id: string;
  private index: number;

  private starship: Starships[] = [];
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
  //     this.starship = list.results;
  //     this.index = this.starship.findIndex(x => x.url === this.url + this.id + '/');
  //     this.getFilms();
  //     this.getPilots();
  //   });
  // }
  //
  // getPilots() {
  //   this.starship[this.index].pilots.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Peoples) => {
  //       this.pilots.push(list);
  //     });
  //   });
  // }
  //
  // getFilms() {
  //   this.starship[this.index].films.forEach((value) => {
  //     this.json.getJson(value).subscribe((list: Films) => {
  //       this.films.push(list);
  //     });
  //   });
  // }
}
