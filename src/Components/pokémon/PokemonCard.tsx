import React, {useState} from 'react'
import { Pokemon, TypeColors } from '../../lib/pokemonData'
import { Link } from 'react-router-dom';
import Abilities from './Abilities';
import Stats from './Stats';
import Type from './Type';


//todo sprite is for mobile and official-artwork desktop


const PokemonCard = ({pokemon} : {pokemon: Pokemon}) => {
    const p: Pokemon = pokemon;
    const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors]
    const officialArtwork = p.sprites.other['official-artwork'].front_default;
    const sprite = p.sprites.front_default;
    
  return (
    <Link to={`/pokemon/${p.name}`}>
        <div style={{ backgroundColor: `#${primaryTypeColor}` }}>
            <h3>{p.name}</h3>
              <img src={officialArtwork} />
           
            <Type pokemon={p}/>
            <Stats pokemon={p}/>
            <Abilities pokemon={p}/>
        </div>
    </Link>
  )
}

export default PokemonCard