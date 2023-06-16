import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen6: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"
  const subtitle = "Generation VI"
  return <PageTemplate url={url} subtitle={subtitle} />
}

export default Gen6