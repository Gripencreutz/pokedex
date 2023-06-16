import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen9: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=105&offset=905"
  const subtitle = "Generation IX"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen9

