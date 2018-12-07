import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  vehiclesList;
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
      this.next = data.vehicles.next;
      this.previous = data.vehicles.previous;
      this.vehiclesList = data.vehicles.results;
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
    this.router.navigate(['vehicles'], {queryParams: {page: query}});
  }
}
