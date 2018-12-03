import {Component, Input, OnInit} from '@angular/core';
import {Films} from '../../interfaces/film';

@Component({
  selector: 'app-sw-films-detail',
  templateUrl: './sw-films-detail.component.html',
  styleUrls: ['./sw-films-detail.component.scss'],
})

export class SwFilmsDetailComponent implements OnInit {

  @Input() film: Films;

  constructor() {
  }

  ngOnInit() {
  }
}

