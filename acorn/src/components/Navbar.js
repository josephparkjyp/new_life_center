import React from 'react'
import '../styles/navbar.css'

function Navbar() {
    return (
    <div className='nav-container'>
        <p className='menu'>MENU</p>
        <a className='logo' href='https://google.com'>
            <p className='logo-top'>NEW LIFE</p>
            <p className='logo-bot'>C E N T E R</p>
        </a>
        <p className='cart'>CART (0)</p>
    </div>
    )
}


export default Navbar