import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
              public router: Router) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      this.next = data.species.next;
      this.previous = data.species.previous;
      this.speciesList = data.species.results;
      this.loader = true;
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  update(url) {
    const query = this.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['species'], {queryParams: {page: query}});
  }
}
