import React from 'react'
import { Pokemon, props } from '../../lib/pokemonData'



const Abilities: React.FC<props> = ({pokemon}) => {
  return (
    <div>
        <h3>Ability</h3>
        {
            pokemon.abilities.map((a) => {
                return <div key={a.ability.name}>
                    <p>{a.ability.name}</p>
                </div>
            })
        }
    </div>
  )
}

export default Abilities