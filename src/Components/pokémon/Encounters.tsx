import React from 'react'
import { EncountersInterface} from '../../lib/pokemonData'


interface propsEncounters{
    locations: {
        location_area: {
            name: string
        }
    }[]
}

const Encounters: React.FC<propsEncounters> = ({locations}) => {
    return (
        <div className='encounters'>
            <h2>Encounter</h2>
            <div className='encounters_contianer'>
                
               {
                    locations.map((l: EncountersInterface) => {
                        return <div className='encounter_wrapper' key={l.location_area.name}>
                            <div className='box'>
                                <p className='icon'>🌍</p>
                                <p> {l.location_area.name}</p>
                            </div>
                           

                        </div>
                    })
                } 
            </div>

        </div>
    )
}

export default Encounters