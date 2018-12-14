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

  constructor(private route: ActivatedRoute,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe((data: People) => {
      this.people = data.details;
      console.log(this.people);
    });
  }
}
