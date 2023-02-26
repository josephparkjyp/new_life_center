import React from 'react'

function Hero(props) {
    
    const heroStyle = {
        margin: 'auto',
        maxWidth: '750px',
        padding: '0 30px',
        paddingBottom: '60px',
    }
    
    
    return (
        <div style={heroStyle}>
            <h1 className='heading'>{props.heading}</h1>
            <p className='description'>{props.description}</p>
            <button className='button'>{props.button}</button>
        </div>
    )
}

export default Hero