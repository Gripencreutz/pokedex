import React, {FC} from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen1:FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  const subTitle = "Generation I"
  return <PageTemplate url={url} subtitle={subTitle}/>
}

export default Gen1