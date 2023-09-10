import axios from 'axios'
import React, {FC, useEffect, useRef, useState } from 'react'
import { EncountersInterface, Pokemon, PokemonSpecies, TypeColors, props } from '../lib/pokemonData';
//import { Link } from 'react-router-dom';
import '../styles/randomPokemon.scss'

const RandomPokemon:FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const officialArtwork = pokemon?.sprites.other['official-artwork'].front_default
    const primaryTypeColor = TypeColors[pokemon?.types[0].type.name as keyof typeof TypeColors];
    
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const randomNum: number = Math.floor(Math.random() * 1010) + 1;
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
                const pokemonResult: Pokemon = res.data;
                setPokemon(pokemonResult)

                
            } catch (error) {
                
            }
            
        }
       
        fetchPokemon()
      
    }, [])

const handleImageLoad = () => {
    setImageLoaded(true)
}

const handleClick = () => {
    if(cardRef.current){
        cardRef.current.classList.add('active');
        setIsPressed(!isPressed);
    }
}

  return (
    <div className="flip-card" onClick={handleClick}>
          <div className="flip-card-inner" ref={cardRef}>
              <div className='flip-card-front' >
                 {
                    imageLoaded && <h1>Who's that pokemon?</h1>
                 } 
                  <img alt="pokemon" src={officialArtwork} onLoad={handleImageLoad} style={{ display: `${!imageLoaded ? "none" : ""}`, filter: "brightness(0%)" }} />
              </div>
              <div className="flip-card-back" style={{ background: `linear-gradient(135deg, white 50%, #${primaryTypeColor} 50%)` }}>
                  <h1>It's {pokemon?.name}!</h1>
                  <img alt="pokemon" src={officialArtwork} onLoad={handleImageLoad} style={{ display: `${!imageLoaded ? "none" : ""}`, filter: "brightness(100%)" }} />
              </div>
          </div>
      </div>
        
  )
}

export default RandomPokemon