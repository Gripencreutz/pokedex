import React, {FC} from 'react'
import PageTemplate from '../Components/pageTemplate'

const Gen2: FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
  const subTitle = "Generation II"
  return <PageTemplate url={url} subtitle={subTitle} />
}

export default Gen2