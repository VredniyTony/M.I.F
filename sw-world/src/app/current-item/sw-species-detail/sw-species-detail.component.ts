import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../../interfaces/specie';

@Component({
  selector: 'app-sw-species-detail',
  templateUrl: './sw-species-detail.component.html',
  styleUrls: ['./sw-species-detail.component.scss']
})
export class SwSpeciesDetailComponent implements OnInit {

 @Input() specie: Species;

  constructor() {
  }

  ngOnInit() {
  }

}
