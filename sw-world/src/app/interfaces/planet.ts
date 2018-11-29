import {Films} from './film';
import {Peoples} from './people';

export interface Planets {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: Peoples[];
    films: Films[];
    created: string;
    edited: string;
    url: string;
}
