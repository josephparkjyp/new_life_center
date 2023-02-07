import React from 'react'
import '../styles/hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <h1 className='heading'>Healthy is delicious.</h1>
            <p className='description'>Healthy and declious go hand 
            in hand with our Korean acorn noodles. With benefits such 
            as diabetes prevention, improved blood health, hemostatic 
            effect and more, these noodles are a must-have for a 
            healthier lifestyle.</p>
            <button type='button' className='shop-now'>Shop Now</button>
        </div>
    )
}

export default Hero