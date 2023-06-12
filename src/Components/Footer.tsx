import React, { FC } from 'react'
const currentYear = new Date().getFullYear()
const Footer: FC = () => {
  return (
    <div>
      <h3>Made by: Simon Gripencreutz</h3>
      <h4>{currentYear}</h4>
      <h3>Power by: <a href='https://pokeapi.co/'>pokeapi.co</a></h3>
    </div>
  )
}

export default Footer