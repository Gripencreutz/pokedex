import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen5: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=155&offset=494"
  const subtitle = "Generation V"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen5