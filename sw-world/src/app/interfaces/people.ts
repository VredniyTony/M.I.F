import {Vehicles} from './vehicle';
import {Films} from './film';
import {Starships} from './starship';
import {Species} from './specie';

export interface Peoples {
    name: string;
    birth_year: string;
    gender: string;
    eye_color: string;
    hair_color: string;
    height: number;
    mass: number;
    created: string;
    edited: string;
    films: Films[];
    homeworld: string;
    skin_color: string;
    species: Species[];
    starships: Starships[];
    url: string;
    vehicles: Vehicles[];
}
