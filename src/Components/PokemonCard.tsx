import React, { useState, useEffect, useRef } from 'react';
import { Pokemon, PokemonSpecies, TypeColors } from '../lib/pokemonData';
import { Link } from 'react-router-dom';
import Type from './pokémon/Type';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import '../styles/pokemonCard.scss';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const [pokedexIndex, setPokedexIndex] = useState<number>(0);
  const [pokeDesc, setPokeDesc] = useState<string>("");
  const p: Pokemon = pokemon;
  const primaryTypeColor = TypeColors[p.types[0].type.name as keyof typeof TypeColors];
  const officialArtwork = p.sprites.other['official-artwork'].front_default;
  const sprite = p.sprites.front_default;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageSrc = isMobile ? sprite : officialArtwork;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

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

  return (
    <Link
      state={{
        pokemon: p,
        pokedexIndex,
        pokeDesc,
        officialArtwork,
        primaryTypeColor,
      }}
      to={{
        pathname: `/pokemon/${p.name.toLowerCase()}`,
      }}
    >
      <div
        ref={cardRef}
        className='card_wrapper hidden'
        style={{ backgroundColor: `#${primaryTypeColor}` }}
      >
        <p>#{pokedexIndex}</p>
        <img src={imageSrc} alt={p.name} />
        {/* <Type pokemon={p}/> */}
      </div>
    </Link>
  );
};

export default PokemonCard;
