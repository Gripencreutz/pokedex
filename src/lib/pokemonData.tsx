export interface Pokemon {
    name: string;
    url: string;
    sprites: {
        front_default: string
        other: {
            home: {
                front_default: string
            }
            "official-artwork": {
                front_default: string
            }
        }
    }
    types: { type: { name: string } }[]; 
    stats: { 
        base_stat: number;
        stat: {
            name: string;
        }
    }[];
    species: {
        name: string;
        url: string;
    };
    abilities: {
        ability: {
            name: string
        }
        is_hidden: boolean
    }[];
}

export interface PokemonSpecies {
    flavor_text_entries: {
        flavor_text: string 
        language: {
            name: string
        }
    }[]
    pokedex_numbers: {entry_number: number}[]
}

export interface props {
    pokemon: Pokemon
}

export enum TypeColors {
    bug = 'B1C12E',
    dark = '4F3A2D',
    dragon = '755EDF',
    electric = 'FCBC17',
    fairy = 'F4B1F4',
    fighting = 'D67873',
    fire = 'E73B0C',
    flying = 'A3B3F7',
    ghost = '6060B2',
    grass = '74C236',
    ground = 'D3B357',
    ice = 'A3E7FD',
    normal = 'C8C4BC',
    poison = '934594',
    psychic = 'ED4882',
    rock = 'B9A156',
    steel = 'B5B5C3',
    water = '3295F6',
}
