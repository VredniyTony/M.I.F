import {Component, Input, OnInit} from '@angular/core';
import {Vehicles} from '../../interfaces/vehicle';

@Component({
  selector: 'app-sw-vehicles-detail',
  templateUrl: './sw-vehicles-detail.component.html',
  styleUrls: ['./sw-vehicles-detail.component.scss']
})
export class SwVehiclesDetailComponent implements OnInit {

  @Input() vehicle: Vehicles;

  constructor() {
  }

  ngOnInit() {
  }

}
