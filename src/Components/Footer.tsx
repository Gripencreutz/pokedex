import React, { FC } from 'react'
import '../styles/footer.scss'
const currentYear = new Date().getFullYear()
const Footer: FC = () => {
  return (
    <footer className='footer'>
      <h3>Power by: <a href='https://pokeapi.co/'>pokeapi.co</a></h3>
      <h3>© Simon Gripencreutz {currentYear}</h3>
    </footer>
  )
}

export default Footer