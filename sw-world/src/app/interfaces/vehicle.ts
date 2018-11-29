import {Films} from './film';
import {Peoples} from './people';

export interface Vehicles {
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  films: Films[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: Peoples[];
  url: string;
  vehicle_class: string;
}
