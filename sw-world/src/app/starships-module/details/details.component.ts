import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {Starship} from './starship';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  starship: Starship;

  constructor(private route: ActivatedRoute,
              public apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe(data => {
      this.starship = data.details;
    });
  }
}
