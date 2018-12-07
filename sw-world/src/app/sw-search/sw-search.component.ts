import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GetCommonDataService} from '../core/get-common-data.service';

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

  formData: any;
  optionsData = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              private apiService: GetCommonDataService) {
    this.formData = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit({value}) {
    let flag = false;
    for (const category of this.optionsData) {
      const itemUrl = category + '?search=' + value.item;
      this.apiService.getItem(itemUrl).subscribe((data: List) => {
        if (data.count !== 0) {
          const redirectUrl = category + '/' + this.getItemId(data.results[0].url);
          this.navigateTo(redirectUrl);
          flag = true;
        }
      });
      if (flag) {
        return;
      }
    }
  }

  getItemId(item) {
    const id = String(item).split('/');
    return id[id.length - 2];
  }

  navigateTo(navigateUrl) {
    this.router.navigate([navigateUrl]);
  }
}
