import React, { useState, useEffect, useRef } from 'react';
import { EncountersInterface, Pokemon, PokemonSpecies, TypeColors } from '../lib/pokemonData';
import { Link } from 'react-router-dom';
import Type from './pokémon/Type';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import '../styles/pokemonCard.scss';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const [pokedexIndex, setPokedexIndex] = useState<number>(0);
  const [pokeDesc, setPokeDesc] = useState<string>("");
  const [pokeLocations, setPokeLocations] = useState<EncountersInterface[] | null>(null)
  const p: Pokemon = pokemon;
  const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors];
  const officialArtwork = p.sprites.other['official-artwork'].front_default;
  const sprite = p.sprites.front_default;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageSrc = isMobile ? sprite : officialArtwork;
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, { threshold: 0.05, root: document.querySelector("#list_wrapper"), rootMargin: "10px"});

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);


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
        res && setPokedexIndex(res?.pokedex_numbers[0]?.entry_number);

        const enDesc = res?.flavor_text_entries?.find((x) => x.language.name === "en")?.flavor_text;
        res && setPokeDesc(enDesc ?? "");
      });
  }, [p.species.url]);

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

    fetchPokemonLocations(p.location_area_encounters)
      .then((res) => {
        
        const locations: EncountersInterface[] | undefined = res?.map((item) => ({
          location_area: {
            name: item?.location_area?.name ?? "",
          },
        }));

       res && setPokeLocations(locations ?? null);

      });
  }, [p.location_area_encounters]);

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  console.log(pokeLocations)
  return (
    <Link
      className='link'
      state={{
        pokemon: p,
        pokedexIndex,
        pokeDesc,
        officialArtwork,
        primaryTypeColor,
        pokeLocations
      }}
      to={{
        pathname: `/pokemon/${p.name.toLowerCase()}`,
      }}
    >
      {!imageLoaded && <p className='loading'>loading...</p>}
      <div
        ref={cardRef}
        className={`card_wrapper hidden`}
        style={{ backgroundColor: `#${primaryTypeColor}`, opacity: imageLoaded ? 1 : 0 }}
      >
        
        <p>#{pokedexIndex}</p>
        <img src={imageSrc} alt={p.name} loading='lazy' onLoad={handleImageLoad}/>
      </div>
    </Link>
  );
};

export default PokemonCard;
