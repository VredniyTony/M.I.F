import {Film} from './film';
import {People} from './people';

export interface Planets {
  count: number;
  next: string;
  previous: string;
  results: [{
    name: string;
    population: number;
    url: string;
  }];
}

export interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: People[];
  films: Film[];
  created: string;
  edited: string;
  url: string;
}
