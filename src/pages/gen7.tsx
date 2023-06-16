import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen7: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"
  const subtitle = "Generation VII"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen7

