import React from 'react'
import '../../styles/pokemonDetails.scss'
import { useLocation } from 'react-router'
import { Pokemon, TypeColors } from '../../lib/pokemonData'
import Type from '../../Components/pokémon/Type'


const Details = () => {
    const location = useLocation()
    const { pokemon, pokedexIndex, pokeDesc, officialArtwork, primaryTypeColor } = location.state as {
        pokemon: Pokemon,
        pokedexIndex: number,
        pokeDesc: string,
        officialArtwork: string, sprite: string, primaryTypeColor: TypeColors
    }

    return (
        <section className='details'>
            <div className='image_wrapper'>
                <div className='bgDiv' style={{ background: `linear-gradient(315deg, white 58%, #${primaryTypeColor} 50%)` }}></div>
                <h2 className='pokeIndex'>#{pokedexIndex}</h2>
                <img alt='pokemon' src={officialArtwork} /> 
            </div>
            <div className='title_type_wrapper'>
                <h1>{pokemon.name}</h1>
                <Type pokemon={pokemon}/>
            </div>
           
           <div className='description'>
                <p>{pokeDesc.replace('\u000C', '')}</p>
           </div>
           
          
        </section>
    )
}

export default Details

