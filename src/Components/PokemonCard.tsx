import React, {useState, useEffect} from 'react'
import { Pokemon, PokemonSpecies, TypeColors } from '../lib/pokemonData'
import { Link } from 'react-router-dom';
import Type from './pokémon/Type';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import '../styles/pokemonCard.scss'

//? sprite => mobile, official-artwork => desktop

const PokemonCard = ({pokemon} : {pokemon: Pokemon}) => {
    const [pokedexIndex, setPokedexIndex] = useState<number>(0)
    const [pokeDesc, setPokeDesc] = useState<string>("")
    const p: Pokemon = pokemon;
    const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors]
    const officialArtwork = p.sprites.other['official-artwork'].front_default;
    const sprite = p.sprites.front_default;
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const imageSrc = isMobile ? sprite : officialArtwork
    
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

        const enDesc = res?.flavor_text_entries?.find(x => x.language.name === "en")?.flavor_text
        res && setPokeDesc(enDesc ?? "")
       
      })}, [p.species.url]);
  
  return (
    <Link state={{ 
      pokemon: p, pokedexIndex, pokeDesc,
      officialArtwork, primaryTypeColor
    }} to={{
      pathname: `/pokemon/${p.name.toLowerCase()}`,
    }}>
      <div className='card_wrapper' style={{ backgroundColor: `#${primaryTypeColor}` }}>
       <p>#{pokedexIndex}</p>
            <img src={imageSrc} />
            {/* <Type pokemon={p}/> */}
           
        </div>
    </Link>
  )
}

export default PokemonCard