import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from "../../core/get-common-data.service";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planetsList;
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
      this.next = data.planets.next;
      this.previous = data.planets.previous;
      this.planetsList = data.planets.results;
      this.loader = true;
    });
  }

  update(url) {
    const query = this.apiService.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['planets'], {queryParams: {page: query}});
  }
}
