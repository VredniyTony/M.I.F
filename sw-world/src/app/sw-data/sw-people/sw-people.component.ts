import {Component, OnInit} from '@angular/core';
import {SwGetJsonService} from '../../sw-get-json.service';
import {Peoples} from '../../interfaces/people';

@Component({
  selector: 'app-sw-people',
  templateUrl: './sw-people.component.html',
  styleUrls: ['./sw-people.component.scss']
})
export class SwPeopleComponent implements OnInit {

  private url = 'https://swapi.co/api/people/';
  private data: Peoples;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getPeoples(this.url).subscribe(list => {
      this.data = list;
      console.log('people', this.data);
    });
  }

  getUrlId(url) {
    const data = String(url).split('/');
    return data[5];
  }
}
