import {Component, Input, OnInit} from '@angular/core';
import {Starships} from '../../interfaces/starship';

@Component({
  selector: 'app-sw-starships-detail',
  templateUrl: './sw-starships-detail.component.html',
  styleUrls: ['./sw-starships-detail.component.scss']
})
export class SwStarshipsDetailComponent implements OnInit {

  @Input() starship: Starships;

  constructor() {
  }

  ngOnInit() {
  }

}
