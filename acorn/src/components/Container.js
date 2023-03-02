import React, { forwardRef } from 'react'

const Container = forwardRef((props,ref) => {

    const containerStyle = {
        height: props.height,
        minHeight: props.min_height,
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div ref={ref} style={containerStyle}>
            <div style={{maxWidth: '1200px', padding: '0 20px'}}>
                {props.children}
            </div>
        </div>
    )
})

export default Container