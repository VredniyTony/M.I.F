import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';

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
              private router: Router,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe(data => {
      this.next = data.vehicles.next;
      this.previous = data.vehicles.previous;
      this.vehiclesList = data.vehicles.results;
      this.loader = true;
    });
  }

  update(url) {
    const query = this.apiService.getItemId(url, 1, '=');
    this.loader = false;
    this.router.navigate(['vehicles'], {queryParams: {page: query}});
  }
}
