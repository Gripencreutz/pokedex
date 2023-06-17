import React from 'react'
import { Pokemon, TypeColors, props } from '../../lib/pokemonData'

//todo create a badge for types and they should have the same color has the type

const Type: React.FC<props> = ({ pokemon }) => {

    return (
        <div className='type_wrapper'>
           
                {
                    pokemon.types.map((types, index) => {
                        const typeColor = TypeColors[types.type.name as keyof typeof TypeColors];
                        return <div className='typeBadge' key={index} style={{background: `#${typeColor}`}}>
                                <strong>{types.type.name}</strong>
                            </div>;
                    })
                }
            
        </div>
    )
}

export default Type