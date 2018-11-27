import {Film} from './film';
import {People} from './people';

export interface Vehicles {
  count: number;
  next: string;
  previous: string;
  results: [{
    name: string;
    vehicle_class: string;
    url: string;
  }];
}

export interface Vehicle {
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  films: Film[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: People[];
  url: string;
  vehicle_class: string;
}
