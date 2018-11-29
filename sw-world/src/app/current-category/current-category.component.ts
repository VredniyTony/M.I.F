import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.scss']
})
export class CurrentCategoryComponent implements OnInit {

  itemsList = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      this.itemsList = data.categoryContent.results;
    });
  }

  getItemId(item) {
    const id = String(item).split('/');
    return id[id.length - 2];
  }
}
