import './Hero.css'
import React from 'react'


function Hero({header, paragraph, button_text, img_url, reverse }) {
    
    
    return (
        <div className='hero-container'>
            <div className='main-text-area'>
                <h1 className='hero-header'>{header}</h1>
                <p className='hero-paragraph'>{paragraph}</p>
                <button className='hero-button'>{button_text}</button>
            </div>
            <img className={`hero-img ${reverse ? 'reverse' : ''}`} src={img_url} alt="noodle" />
        </div>
    )
}

export default Hero