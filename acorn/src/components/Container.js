import './Container.css'
import React from 'react'

function Container(props) {

    const containerStyle = {
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return (
        <div className={props.class_name} style={containerStyle}>
            {props.children}
        </div>
    )
}

export default Container