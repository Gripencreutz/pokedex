import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { PageTemplateProps,Pokemon} from '../lib/pokemonData'
import PokemonCardList from '../Components/PokemonCardList'
import scorch from '../images/scorch.png'
import Navbar from './Navbar'

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

    }, [url])

    return (
        <>
        <Navbar />
        <section className='page'>
            <div className='title_container'>
                <img className='scorch' src={scorch} />
                <h1 className='title'>Pokémon</h1>
                <h2 className='subTitle'>{subtitle}</h2>
            </div>
            
            <PokemonCardList pokemonList={pokemons} />
        </section>
        </>
    )
}

export default PageTemplate