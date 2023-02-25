import React from 'react'

function Container(props) {

    const containerStyle = {
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0',
        padding: '0'
    }

    return (
        <div className={props.class_name} style={containerStyle}>
            {props.children}
        </div>
    )
}

export default Container