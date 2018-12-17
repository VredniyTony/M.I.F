import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  filmsList;
  next;
  previous;
  loader;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe(data => {
      this.next = data.films.next;
      this.previous = data.films.previous;
      this.filmsList = data.films.results;
      this.loader = true;
    });
  }

  update(url) {
    const query = this.apiService.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['films'], {queryParams: {page: query}});
  }
}
