import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NavigationStart, Router} from '@angular/router';
import {GetCommonDataService} from '../core/get-common-data.service';
import {filter} from 'rxjs/operators';

interface List {
  count: number;
  results: [{
    url: string;
  }];
}

@Component({
  selector: 'app-sw-search',
  templateUrl: './sw-search.component.html',
  styleUrls: ['./sw-search.component.scss']
})
export class SwSearchComponent {

  results;
  formData: any;
  optionsData = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              private apiService: GetCommonDataService) {
    this.formData = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => (this.results = null));
  }

  onSubmit({value}) {
    this.results = null;
    this.optionsData.forEach(category => {
      const itemUrl = category + '?search=' + value.item;
      this.apiService.getItem(itemUrl).subscribe((data: List) => {
        if (data.count === 0) {
          this.results++;
          return;
        }
        const redirectUrl = category + '/' + this.getItemId(data.results[0].url);
        this.navigateTo(redirectUrl);
      });
    });
  }

  getItemId(item) {
    const id = String(item).split('/');
    return id[id.length - 2];
  }

  navigateTo(navigateUrl) {
    this.router.navigate([navigateUrl]);
  }
}
