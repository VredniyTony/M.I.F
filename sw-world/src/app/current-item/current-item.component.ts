import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss']
})
export class CurrentItemComponent implements OnInit {

  itemData;
  categoryName;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItemsList();
    this.getCategoryName();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      this.itemData = data.item;
    });
  }

  getCategoryName() {
    this.categoryName = this.route.parent.snapshot.paramMap.get('id');
  }
}
