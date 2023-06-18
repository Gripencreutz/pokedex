import React from 'react'
import { Pokemon, TypeColors, props } from '../../lib/pokemonData'

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