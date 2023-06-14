import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import {Pokemon, PokemonSpecies} from '../lib/pokemonData'
import PokemonCardList from '../Components/PokemonCardList'



const Gen1:FC = () => {
  const [pokemons, pokemonsSet] = useState<Pokemon[]>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

        const pokemonList: Pokemon[] = response.data.results;
        const pokemonData: Pokemon[] = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );
        
        pokemonsSet(pokemonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
   
  }, [])

  return (
    <section>
      <h1>Generation I</h1>
      <PokemonCardList pokemonList={pokemons} />
    </section>
  )
}

export default Gen1