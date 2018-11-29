import {Films} from './film';
import {Peoples} from './people';

export interface Starships {
    MGLT: number;
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: number;
    created: string;
    crew: number;
    edited: string;
    films: Films[];
    hyperdrive_rating: string;
    length: number;
    manufacturer: string;
    max_atmosphering_speed: number;
    model: string;
    name: string;
    passengers: number;
    pilots: Peoples[];
    starship_class: string;
    url: string;
}
