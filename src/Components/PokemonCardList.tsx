import React from 'react'
import { Pokemon } from '../lib/pokemonData'
import PokemonCard from './PokemonCard'
import '../styles/pokemonList.scss'
//todo card container with flex/grid

const PokemonCardList = ({pokemonList} : {pokemonList: Pokemon[]}) => {
  return (
    <div className='list_wrapper'>
        {
            pokemonList.map((p: Pokemon, index) => {
                return <PokemonCard key={index} pokemon={p} />
            })
        }
    </div>
  )
}

export default PokemonCardList