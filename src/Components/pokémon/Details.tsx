import React from 'react'
import '../../styles/pokemonDetails.scss'
import { useLocation } from 'react-router'
import { EncountersInterface, Pokemon, TypeColors } from '../../lib/pokemonData'
import Type from '../../Components/pokémon/Type'
import Abilities from './Abilities'
import Stats from './Stats'
import Encounters from './Encounters'
import Return from '../utils/Return'


const Details = () => {
    const location = useLocation()
    const { pokemon, pokedexIndex, pokeDesc, officialArtwork, primaryTypeColor, pokeLocations, returnPath } = location.state as {
        pokemon: Pokemon,
        pokedexIndex: number,
        pokeDesc: string,
        officialArtwork: string, sprite: string, primaryTypeColor: TypeColors, pokeLocations: EncountersInterface[], returnPath: string
    }


    return (
        <section className='details'>
            <Return subtitle='' url={returnPath}/>
            <div className='image_wrapper'>
                <div className='bgDiv' style={{ background: `linear-gradient(315deg, white 58%, #${primaryTypeColor} 50%)` }}></div>
                <h2 className='pokeIndex'>#{pokedexIndex}</h2>
                <img alt='pokemon' src={officialArtwork} /> 
            </div>
            <div className='title_type_wrapper'>
                <h1>{pokemon.name}</h1>
                <Type pokemon={pokemon} />
            </div>
           
           <div className='description'>
                <p>{pokeDesc.replace('\u000C', '')}</p>
           </div>
            <Stats pokemon={pokemon}/>
            <Abilities pokemon={pokemon} color={primaryTypeColor}/>
            {pokeLocations.length ? <Encounters locations={pokeLocations} /> : null}
          
        </section>
    )
}

export default Details

