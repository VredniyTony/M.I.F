import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss']
})
export class CurrentItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {
    this.route.data.subscribe(data => {
      console.log(data.item);
    });
  }
}
