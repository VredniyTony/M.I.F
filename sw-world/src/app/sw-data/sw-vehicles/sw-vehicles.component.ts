import {Component, OnInit} from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Starships} from '../../interfaces/starship';
import {Vehicles} from '../../interfaces/vehicle';

@Component({
  selector: 'app-sw-vehicles',
  templateUrl: './sw-vehicles.component.html',
  styleUrls: ['./sw-vehicles.component.scss']
})
export class SwVehiclesComponent implements OnInit {

  private url = 'https://swapi.co/api/vehicles/';
  private data: Vehicles;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getVehicles(this.url).subscribe(list => {
      this.data = list;
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }
}
