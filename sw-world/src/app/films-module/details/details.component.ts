import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Film} from './film';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  film: Film;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe((data) => {
      this.film = data.details;
      console.log(this.film);
    });
  }
}
