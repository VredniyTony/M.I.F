import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sw-search',
  templateUrl: './sw-search.component.html',
  styleUrls: ['./sw-search.component.scss']
})
export class SwSearchComponent {

  formData: any;
  private optionsData = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
  private url = 'https://swapi.co/api/';
  private urlGet: string;

  constructor(private formBuilder: FormBuilder,
              public router: Router) {
    this.formData = this.formBuilder.group({
      data: ['', [Validators.required, Validators.minLength(2)]],
      property: ''
    });
  }

  // onSubmit() {
  //   switch (this.formData.controls['property'].value) {
  //     case 'Films':
  //       this.urlGet = this.url + 'films/' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getFilms(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/films/details/' + this.getUrlId(list.results.url)]);
  //       });
  //       break;
  //     case 'People':
  //       this.urlGet = this.url + 'people' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getPeoples(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/people/details/' + this.getUrlId(list.results[0].url)]);
  //       });
  //       break;
  //     case 'Planets':
  //       this.urlGet = this.url + 'planets' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getPlanets(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/planets/details/' + this.getUrlId(list.results[0].url)]);
  //       });
  //       break;
  //     case 'Species':
  //       this.urlGet = this.url + 'species/' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getSpecies(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/species/details/' + this.getUrlId(list.results[0].url)]);
  //       });
  //       break;
  //     case 'Starships':
  //       this.urlGet = this.url + 'starships/' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getStarships(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/starships/details/' + this.getUrlId(list.results[0].url)]);
  //       });
  //       break;
  //     case 'Vehicles':
  //       this.urlGet = this.url + 'vehicles/' + '?search=' + this.formData.controls['data'].value;
  //       this.json.getVehicles(this.urlGet).subscribe(list => {
  //         this.router.navigate(['/vehicles/details/' + this.getUrlId(list.results[0].url)]);
  //       });
  //       break;
  //   }
  // }
}
