import React from 'react'
import { Pokemon, props } from '../../lib/pokemonData'

//todo create a badge for types and they should have the same color has the type

const Type: React.FC<props> = ({ pokemon }) => {

    return (
        <div className='type_wrapper'>
           
                {
                    pokemon.types.map((types, index) => {
                        return <div className='typeBadge' key={index}>
                                <p >{types.type.name}</p>
                            </div>;
                    })
                }
            
        </div>
    )
}

export default Type