import React from 'react'
import { Pokemon, PropsTypeColor, props } from '../../lib/pokemonData'
import ball from '../../images/pokeball.png'



const Abilities: React.FC<PropsTypeColor> = ({pokemon, color}) => {
  return (
    <div className='abilities'>
        <h2>Abilities</h2>
        <div className='abilities_contianer' style={{background: `#${color}`}}>
          {
            pokemon.abilities.map((a) => {
              const hidden = a.is_hidden ? "(Hidden) " : ""
              return <div className='ability_wrapper' key={a.ability.name}>
               
                <div>
                  <img alt="ball" src={ball}/>
                  <strong>{a.ability.name}</strong>
                </div>
                 
                {hidden && <p style={{marginLeft: "35px"}}>{hidden}</p>}
              </div>
            })
          }
        </div>
       
    </div>
  )
}

export default Abilities