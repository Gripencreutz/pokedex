import React from 'react'
import { Pokemon, props, StatsColors } from '../../lib/pokemonData'



const Stats: React.FC<props> = ({ pokemon }) => {
    return (
        <div className='stats'>
            <h2>Stats</h2>
            <div className='stats_container'>
                {
                    pokemon.stats.map((stats, index) => {
                        const statColors = StatsColors[stats.stat.name as keyof typeof StatsColors];
                        const spattack = stats.stat.name.includes("special-attack");
                        const spdefense = stats.stat.name.includes("special-defense");
                        return <div className='stat_wrapper' key={index} style={{background: `#${statColors}`}}>
                            {spattack ? <h4>Sp-Attack</h4> : (spdefense ? <h4>Sp-defense</h4> : <h4>{stats.stat.name}</h4>)}
                            <h4>{stats.base_stat}</h4>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
 
export default Stats