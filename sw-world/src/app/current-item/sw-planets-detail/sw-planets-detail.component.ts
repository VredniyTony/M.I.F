import {Component, Input, OnInit} from '@angular/core';
import {Planets} from '../../interfaces/planet';

@Component({
  selector: 'app-sw-planets-detail',
  templateUrl: './sw-planets-detail.component.html',
  styleUrls: ['./sw-planets-detail.component.scss']
})
export class SwPlanetsDetailComponent implements OnInit {

  @Input() planet: Planets;

  constructor() {
  }

  ngOnInit() {
  }

}
