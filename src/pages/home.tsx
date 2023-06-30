import React, {FC } from 'react'
import '../styles/home.scss'
import RandomPokemon from '../Components/randomPokemon'
import CallToAction from '../Components/CallToAction'
import scorch from '../images/scorch.png'
import Navbar from '../Components/Navbar'


//todo add: Hero, random pokemon section, call to action (poke api ref)
const Home:FC = () => { 



  return (
    <>
    <div className='home'>
      <div className="title_wrapper">
        <div>
          <h1>ScorchDex</h1>
          <img src={scorch} />
        </div>
       
        <p>The easy peasy way to Pokémon knowledge</p>
      </div>
    
    <RandomPokemon/>
    <CallToAction title='Check out Gen I' subTitle='The very first Generation of Pokémon' buttonText='Let´s Go' url='/gen-I'/>
    </div>
    </>
  )
}

export default Home