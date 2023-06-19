import React, {FC } from 'react'
import '../styles/home.scss'
import RandomPokemon from '../Components/randomPokemon'


//todo add: Hero, random pokemon section, call to action (poke api ref)
const Home:FC = () => { 



  return (
    <div className='home'>
      <div className="title_wrapper">
        <h1>ChariBase</h1>
        <p>The easy peasy way to Pokémon knowledge</p>
      </div>
    
    <RandomPokemon/>
    </div>
  )
}

export default Home