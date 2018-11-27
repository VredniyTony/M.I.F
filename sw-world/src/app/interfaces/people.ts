import {Vehicle} from './vehicle';
import {Film} from './film';
import {Starship} from './starship';
import {Specie} from './specie';

export interface Peoples {
  results: [{
    name: string;
    birth_year: string;
    url: string;
  }];
}

export interface People {
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  hair_color: string;
  height: number;
  mass: number;
  created: string;
  edited: string;
  films: Film[];
  homeworld: string;
  skin_color: string;
  species: Specie[];
  starships: Starship[];
  url: string;
  vehicles: Vehicle[];
}
