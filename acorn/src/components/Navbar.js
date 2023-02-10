import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    
    const [toggle, setToggle] = useState(false)
    
    return (
    <>
        <div className='nav-container'>
            <p className='menu' onClick={() => setToggle(!toggle)}>MENU</p>
            <a className='logo' href='https://google.com'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>
            <p className='cart'>CART (0)</p>
        </div>
        {toggle && <Menu setToggle={setToggle}/>}
    </>
    )
}

function Menu({ setToggle }) {
    return (
        <div className='menu-container'>
            
            <div className='menu-exit' onClick={() => setToggle(false)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <ul className='menu-ul'>
                <li className='menu-li'>Shop</li>
                <li className='menu-li'>Learn</li>
                <li className='menu-li'>About Us</li>
            </ul>
        </div>
    )
}









export default Navbar