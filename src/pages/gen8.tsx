import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen8: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=96&offset=809"
  const subtitle = "Generation VIII"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen8

