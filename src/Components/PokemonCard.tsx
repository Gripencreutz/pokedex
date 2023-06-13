import React, {useState, useEffect} from 'react'
import { Pokemon, PokemonSpecies, TypeColors } from '../lib/pokemonData'
import { Link, useLocation } from 'react-router-dom';
import Abilities from './pokémon/Abilities';
import Stats from './pokémon/Stats';
import Type from './pokémon/Type';
import axios from 'axios';

//? sprite => mobile, official-artwork => desktop

const PokemonCard = ({pokemon} : {pokemon: Pokemon}) => {
    const [pokedexIndex, setPokedexIndex] = useState<number>(0)
    const [pokeDesc, setPokeDesc] = useState<string>("")
    const p: Pokemon = pokemon;
    const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors]
    const officialArtwork = p.sprites.other['official-artwork'].front_default;
    const sprite = p.sprites.front_default;
    
  useEffect(() => {
    const fetchPokemonSpecies = async (speciesUrl: string) => {
      try {
        const response = await axios.get<PokemonSpecies>(speciesUrl);
        return response.data;
      } catch (error) {
        console.error('Error fetching Pokémon species:', error);
        return null;
      }
    };

    fetchPokemonSpecies(p.species.url)
      .then((res) => {
        res && setPokedexIndex(res?.pokedex_numbers[0]?.entry_number)

        const enDesc = res?.flavor_text_entries.find(x => x.language.name === "en")?.flavor_text
        res && setPokeDesc(enDesc ?? "")
       
      })}, [p.species.url]);
  
      console.log(officialArtwork)
  return (
    <Link state={{ 
      pokemon: p, pokedexIndex, pokeDesc,
      officialArtwork, sprite, primaryTypeColor
    }} to={{
      pathname: `/pokemon/${p.name.toLowerCase()}`,
    }}>
        <div style={{ backgroundColor: `#${primaryTypeColor}` }}>
            <h3>{p.name} #{pokedexIndex}</h3>
            <img src={officialArtwork} />
           
            <Type pokemon={p}/>
            <Stats pokemon={p}/>
            <Abilities pokemon={p}/>
        </div>
    </Link>
  )
}

export default PokemonCard