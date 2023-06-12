import React from 'react'
import { Pokemon } from '../../lib/pokemonData'
import PokemonCard from './PokemonCard'

//todo card container with flex/grid

const PokemonCardList = ({pokemonList} : {pokemonList: Pokemon[]}) => {
  return (
    <div>
        {
            pokemonList.map((p: Pokemon, index) => {
                return <PokemonCard key={index} pokemon={p} />
            })
        }
    </div>
  )
}

export default PokemonCardList