import React, {useEffect, useRef, useState} from 'react'
import { Pokemon } from '../lib/pokemonData'
import PokemonCard from './PokemonCard'
import '../styles/pokemonList.scss'


const PokemonCardList = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  const [searchInput, setSearchInput] = useState<string>("");
 

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredPokemon = searchInput? pokemonList.filter((p: Pokemon) => p.name.toLowerCase().includes(searchInput.toLowerCase())): pokemonList;

  
  return (
    <section className='pokemonList_section'>
      
        <input
          className='input_bar'
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search Pokemon"
        />
      
     
      <div className='list_wrapper'>
        {filteredPokemon.map((p: Pokemon, index) => (
          <PokemonCard key={index} pokemon={p} />
        ))}
      </div>
    </section>
  );
};

export default PokemonCardList;