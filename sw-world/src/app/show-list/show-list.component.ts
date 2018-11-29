import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  categories;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.route.data.subscribe(data => {
      this.categories = Object.keys(data.category);
    });
  }
}
