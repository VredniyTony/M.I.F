import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  speciesList;
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
      this.next = data.species.next;
      this.previous = data.species.previous;
      this.speciesList = data.species.results;
      this.loader = true;
    });
  }

  update(url) {
    const query = this.apiService.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['species'], {queryParams: {page: query}});
  }
}
