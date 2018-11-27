import {Film} from './film';
import {People} from './people';

export interface Starships {
  count: number;
  next: string;
  previous: string;
  results: [{
    name: string;
    MGLT: number;
    url: string;
  }];
}

export interface Starship {
  MGLT: number;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  films: Film[];
  hyperdrive_rating: string;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: People[];
  starship_class: string;
  url: string;
}
