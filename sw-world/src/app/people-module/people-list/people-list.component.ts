import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList;
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
      this.next = data.people.next;
      this.previous = data.people.previous;
      this.peopleList = data.people.results;
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
    this.router.navigate(['people'], {queryParams: {page: query}});
  }
}
