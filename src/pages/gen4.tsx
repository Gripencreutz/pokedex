import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen4: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
  const subtitle = "Generation IV"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen4