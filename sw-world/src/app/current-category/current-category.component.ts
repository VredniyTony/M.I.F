import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from '../get-common-data.service';
import {map} from 'rxjs/operators';

interface List {
  next: string;
  previous: string;
  results: [];
}

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.scss']
})
export class CurrentCategoryComponent implements OnInit {

  itemsList = [];
  next;
  previous;
  categoryName;
  loader;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.loader = true;
    this.route.data.subscribe(data => {
      this.itemsList = data.categoryContent.results;
      this.setStates(data.categoryContent.next, data.categoryContent.previous);
      this.loader = false;
    });
  }

  getItemId(item, index, separator) {
    const id = String(item).split(separator);
    return id[id.length - index];
  }

  setStates(next, previous) {
    this.next = next;
    this.previous = previous;
  }

  updateList(url) {
    this.loader = true;
    this.categoryName = this.route.snapshot.paramMap.get('id');
    const queryParams = this.getItemId(url, 1, '=');
    const redirectUrl = 'list/categories/' + this.categoryName;
    this.navigateTo(redirectUrl, queryParams);
  }

  navigateTo(navigateUrl, queryParams) {
    this.router.navigate([navigateUrl], {queryParams: {page: queryParams}});
  }
}
