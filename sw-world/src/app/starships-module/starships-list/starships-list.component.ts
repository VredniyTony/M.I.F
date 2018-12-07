import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
              public router: Router) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      this.next = data.starships.next;
      this.previous = data.starships.previous;
      this.starshipsList = data.starships.results;
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
    this.router.navigate(['starships'], {queryParams: {page: query}});
  }
}
