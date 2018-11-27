import {Film} from './film';
import {People} from './people';

export interface Species {
  count: number;
  next: string;
  previous: string;
  results: [{
    name: string;
    created: string;
    url: string;
  }];
}

export interface Specie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: Film[];
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: People[];
  skin_colors: string;
  url: string;
}
