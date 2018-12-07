import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {


  filmsList;

  constructor(private route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      this.filmsList = data.films.results;
    });
  }

  getItemId(item) {
    const id = String(item).split('/');
    return id[id.length - 2];
  }
}
