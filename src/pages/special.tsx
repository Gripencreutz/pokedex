import React, { FC } from 'react'
import PageTemplate from '../Components/pageTemplate'

const Special: FC = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=1010"
    const subtitle = "Special"
    return <PageTemplate url={url} subtitle={subtitle} />
}

export default Special

