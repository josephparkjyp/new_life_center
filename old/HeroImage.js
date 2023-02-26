import React from 'react'

function HeroImage(props) {
    
    const heroImageContainerStyle = {
        maxWidth: '60%',
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
    }

    const heroImageStyle = {
        width: '100%',
        height: 'auto',
        aspectRatio: '4 / 3',
        objectFit: 'cover',
    }
    
    
    return (
        <div style={heroImageContainerStyle}>
            <img style={heroImageStyle} src={props.image} />
        </div>
        
    )
}

export default HeroImage