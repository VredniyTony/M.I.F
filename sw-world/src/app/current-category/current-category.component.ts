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

  getItemId(item, index) {
    const id = String(item).split('/');
    return id[id.length - index];
  }

  setStates(next, previuos) {
    this.next = next;
    this.previous = previuos;
  }

  updateList(url) {
    this.loader = true;
    this.categoryName = this.route.snapshot.paramMap.get('id');
    this.apiService.getCategory(this.categoryName + this.getItemId(url, 1)).subscribe((data: List) => {
      this.itemsList = data.results;
      this.setStates(data.next, data.previous);
      this.loader = false;
    });
  }
}
