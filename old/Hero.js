import './Hero.css'
import React from 'react'

function Hero(props) {
    
    const heroStyle = {
        maxWidth: '40%',
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
    }

    const headingStyle = {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: '500',
    }

    const descriptionStyle = {
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        lineHeight: '2.25',
    }

    const buttonStyle = {
        width: '150px',
        height: '50px',
        backgroundColor: 'transparent',
        fontFamily: 'Fraunces',
        fontSize: '1.15rem',
        fontWeight: '750',
    }
    
    
    return (
        <div style={heroStyle}>
            <h1 style={headingStyle}>{props.heading}</h1>
            <p style={descriptionStyle}>{props.description}</p>
            <button style={buttonStyle}>{props.button}</button>
        </div>
    )
}

export default Hero