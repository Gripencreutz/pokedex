import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { PageTemplateProps,Pokemon} from '../lib/pokemonData'
import PokemonCardList from '../Components/PokemonCardList'

const PageTemplate:FC<PageTemplateProps> = ({url, subtitle}) => {
    const [pokemons, pokemonsSet] = useState<Pokemon[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);

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
        <section className='page'>
            <h1 className='title'>Pokémon</h1>
            <h2 className='subTitle'>{subtitle}</h2>
            <PokemonCardList pokemonList={pokemons} />
        </section>
    )
}

export default PageTemplate