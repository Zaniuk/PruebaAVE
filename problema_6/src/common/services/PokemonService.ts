// Create a Service 
// Create a method to get a pokemon by id

import { Pokemon } from "../types/Pokemon";

export interface PokemonServiceInterface {
    getPokemonByQuery(query: string): Promise<Pokemon>;
}

export class PokemonService implements PokemonServiceInterface{
    BASE_URL = 'https://pokeapi.co/api/v2';
    async getPokemonByQuery(query: string): Promise<Pokemon> {
        try {
            const response = await fetch(`${this.BASE_URL}/pokemon/${query}`);
            const data = await response.json();
            return data;
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}