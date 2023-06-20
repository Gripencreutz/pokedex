import React, {FC} from 'react'
import { Link } from 'react-router-dom'

interface Ctaprops{
    title: string,
    subTitle: string,
    buttonText: string
    url: string
}

const CallToAction:FC<Ctaprops> = ({title, subTitle, buttonText, url}) => {
  return (
    <section className='cta'>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <Link to={url}>
              <button>{buttonText}</button>
        </Link>

    </section>
  )
}

export default CallToAction