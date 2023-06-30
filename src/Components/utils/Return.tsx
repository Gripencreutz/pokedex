import React,{FC} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { PageTemplateProps } from '../../lib/pokemonData';
import returnImg from '../../images/return.png'

const Return:FC<PageTemplateProps> = ({url}) => {
  return (
    <Link className='returnBtn' to={url}>
        <img src={returnImg}/>
    </Link>
  )
}

export default Return