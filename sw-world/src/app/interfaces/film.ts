import {Peoples} from './people';
import {Planets} from './planet';
import {Vehicles} from './vehicle';
import {Starships} from './starship';
import {Species} from './specie';

export interface Films {
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
    characters: Peoples[];
    edited: string;
    planets: Planets[];
    species: Species[];
    starships: Starships[];
    vehicles: Vehicles[];
}
