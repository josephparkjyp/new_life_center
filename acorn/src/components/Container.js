import React from 'react'

function Container(props) {

    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={containerStyle}>
            <div style={{maxWidth: '1200px', padding: '0 20px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Container