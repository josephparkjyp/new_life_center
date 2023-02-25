import React from 'react'
import '../styles/Hero.css'

function Hero(props) {
    return (
        <div className='hero-container'>
            <h1 className='heading'>{props.heading}</h1>
            <p className='description'>{props.description}</p>
            <button className='button'>{props.button}</button>
        </div>
    )
}

export default Hero