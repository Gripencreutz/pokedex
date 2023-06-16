import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen3: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=251"
  const subtitle = "Generation III"
  return <PageTemplate url={url} subtitle={subtitle}/>
}

export default Gen3