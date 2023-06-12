import React from 'react'
import { Pokemon, props } from '../../lib/pokemonData'



const Type: React.FC<props> = ({ pokemon }) => {

    return (
        <div>
            <h3>Type</h3>
            <ul>
                {
                    pokemon.types.map((types, index) => {
                        return <li key={index}>{types.type.name}</li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Type