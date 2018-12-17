import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetCommonDataService} from '../../core/get-common-data.service';
import {Specie} from './specie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  specie: Specie;

  constructor(private route: ActivatedRoute,
              private apiService: GetCommonDataService) {
  }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.route.data.subscribe(data => {
      this.specie = data.details;
    });
  }
}
