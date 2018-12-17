import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starshipsList;
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
      this.next = data.starships.next;
      this.previous = data.starships.previous;
      this.starshipsList = data.starships.results;
      this.loader = true;
    });
  }

  update(url) {
    const query = this.apiService.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['starships'], {queryParams: {page: query}});
  }
}
