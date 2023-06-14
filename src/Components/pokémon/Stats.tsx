import React from 'react'
import { Pokemon, props } from '../../lib/pokemonData'



const Stats: React.FC<props> = ({ pokemon }) => {

    return (
        <div>
            <h3>Stats</h3>
            <ul>
                {
                    pokemon.stats.map((stats, index) => {
                        return <li key={index}>
                            <strong>{stats.stat.name}</strong>
                            <p>{stats.base_stat}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Stats