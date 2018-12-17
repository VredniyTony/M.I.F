import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {Film} from './film';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  film: Film;

  constructor(private route: ActivatedRoute,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data) => {
      this.film = data.details;
    });
  }
}
