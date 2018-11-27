import {Component, OnInit} from '@angular/core';
import {SwGetJsonService} from '../sw-get-json.service';
import {Nav} from '../interfaces/nav';


@Component({
  selector: 'app-sw-nav-menu',
  templateUrl: './sw-nav-menu.component.html',
  styleUrls: ['./sw-nav-menu.component.scss']
})
export class SwNavMenuComponent implements OnInit {

  private navUrl = 'https://swapi.co/api/';
  private navMenu: Nav;

  constructor(private json: SwGetJsonService) {
  }

  ngOnInit() {
    this.json.getNav(this.navUrl).subscribe(list => {
      this.navMenu = list;
    });
  }
}

