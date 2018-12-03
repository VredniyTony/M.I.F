import {Component, Input, OnInit} from '@angular/core';
import {Peoples} from '../../interfaces/people';

@Component({
  selector: 'app-sw-people-detail',
  templateUrl: './sw-people-detail.component.html',
  styleUrls: ['./sw-people-detail.component.scss']
})
export class SwPeopleDetailComponent implements OnInit {

  @Input() people: Peoples;

  constructor() {
  }

  ngOnInit() {
  }
}

