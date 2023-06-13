import React from 'react'
import { useLocation } from 'react-router'
import { Pokemon, TypeColors } from '../../lib/pokemonData'
import Type from '../../Components/pokémon/Type'

const PokemonDetails = () => {
  const location = useLocation()
  const { pokemon, pokedexIndex, pokeDesc, officialArtwork, sprite, primaryTypeColor } = location.state as {
    pokemon: Pokemon, 
    pokedexIndex: number, 
    pokeDesc: string,
    officialArtwork: string, sprite: string, primaryTypeColor: TypeColors
  }
 
  return (
    <div>
      <h1 style={{color: `#${primaryTypeColor}`}}>#{pokedexIndex} {pokemon.name} </h1>
      <img src={officialArtwork}/>
      <p>{pokeDesc.replace('\u000C', '')}</p>
      <Type pokemon={pokemon}/>
    </div>
  )
}

export default PokemonDetails 

