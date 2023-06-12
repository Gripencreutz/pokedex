import React, {useState} from 'react'
import { Pokemon, TypeColors } from '../lib/pokemonData'
import { Link } from 'react-router-dom';


//todo make small cards with name and


const PokemonCard = ({pokemon} : {pokemon: Pokemon}) => {
    const p: Pokemon = pokemon;
    const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors]

  return (
    <Link to={`/pokemon/${p.name}`}>
        <div style={{ backgroundColor: `#${primaryTypeColor}` }}>
            <h3>{p.name}</h3>
            {/* <img src={p.sprites.pokemonSpriteUrl}/> */}
            <ul>
                {
                    p.types.map((types, index) => {
                        return <li key={index}>{types.type.name}</li>;
                    })
                }
            </ul>
            <ul>
                {
                    p.stats.map(stats => {
                        return <li>
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