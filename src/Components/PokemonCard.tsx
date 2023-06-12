import React, {useState} from 'react'
import { Pokemon, TypeColors } from '../lib/pokemonData'
import { Link } from 'react-router-dom';


//todo make small cards with name and


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
            <ul>
                {
                    p.types.map((types, index) => {
                        return <li key={index}>{types.type.name}</li>;
                    })
                }
            </ul>
            <ul>
                {
                    p.stats.map((stats, index) => {
                        return <li key={index}>
                            <strong>{stats.stat.name}</strong>
                            <p>{stats.base_stat}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    </Link>
  )
}

export default PokemonCard