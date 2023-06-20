import axios from 'axios'
import React, {FC, useEffect, useState } from 'react'
import { EncountersInterface, Pokemon, PokemonSpecies, TypeColors, props } from '../lib/pokemonData';
import { Link } from 'react-router-dom';

const RandomPokemon:FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const officialArtwork = pokemon?.sprites.other['official-artwork'].front_default
    const [pokedexIndex, setPokedexIndex] = useState<number>(0);
    const [pokeDesc, setPokeDesc] = useState<string>("");
    const [pokeLocations, setPokeLocations] = useState<EncountersInterface[] | null>(null)
    const primaryTypeColor = TypeColors[pokemon?.types[0].type.name as keyof typeof TypeColors];
    
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const randomNum: number = Math.floor(Math.random() * 1010) + 1;
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
                const pokemonResult: Pokemon = res.data;
                setPokemon(pokemonResult)

                const species = await axios.get<PokemonSpecies>(pokemonResult.species.url);
                setPokedexIndex(species.data.pokedex_numbers[0].entry_number)

                const enDesc = species.data?.flavor_text_entries?.find((x) => x.language.name === "en")?.flavor_text;
                res && setPokeDesc(enDesc ?? "");

            } catch (error) {
                
            }
            
        }
       
        fetchPokemon()
      
    }, [])

    useEffect(() => {
        const fetchPokemonLocations = async (locationUrl: string) => {
            try {
                const response = await axios.get<EncountersInterface[]>(locationUrl);
                return response.data;
            } catch (error) {
                console.error('Error fetching Pokémon species:', error);
                return null;
            }
        };

       
        if (pokemon?.location_area_encounters) {
            fetchPokemonLocations(pokemon.location_area_encounters)
                .then((res) => {
                    const locations: EncountersInterface[] | undefined = res?.map((item) => ({
                        location_area: {
                            name: item?.location_area?.name ?? "",
                        },
                    }));
                    setPokeLocations(locations ?? null);
                });
        }
    }, [pokemon?.location_area_encounters]);

const handleImageLoad = () => {
    setImageLoaded(true)
}

  return (
    <div className='random'>
        <h2>Do you know this one?</h2>
        <Link to={`/pokemon/${pokemon?.name}`} state={{
              pokemon,
              pokedexIndex,
              pokeDesc,
              officialArtwork,
              primaryTypeColor,
              pokeLocations
        }}>
              <img alt="pokemon" src={officialArtwork} onLoad={handleImageLoad} style={{ display: `${!imageLoaded ? "none" : ""}` }} />
        </Link>
    </div>
  )
}

export default RandomPokemon