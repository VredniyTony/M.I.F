import {People} from './people';
import {Planet} from './planet';
import {Vehicle} from './vehicle';
import {Starship} from './starship';
import {Specie} from './specie';

export interface Films {
  count: number;
  results: [{
    title: string;
    opening_crawl: string;
    url: string;
  }];
}

export interface Film {
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  title: string;
  url: string;
  characters: People[];
  edited: string;
  planets: Planet[];
  species: Specie[];
  starships: Starship[];
  vehicles: Vehicle[];
}
