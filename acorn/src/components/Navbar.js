import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    
    const [toggle, setToggle] = useState(false)
    const [toggleCart, setToggleCart] = useState(false)
    
    return (
    <>
        <div className='nav-container'>
            <p className='menu' onClick={() => setToggle(!toggle)}>MENU</p>
            <a className='logo' href='http://localhost:3000/'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>
            <p className='cart' onClick={() => setToggleCart(!toggleCart)}>CART (0)</p>
        </div>
        {toggle && <Darken toggle={toggle} setToggle={setToggle} toggleCart={toggleCart} setToggleCart={setToggleCart} />}
        {toggleCart && <Darken toggle={toggle} setToggle={setToggle} toggleCart={toggleCart} setToggleCart={setToggleCart} />}
        {toggle && <Menu setToggle={setToggle}/>}
        {toggleCart && <Cart setToggleCart={setToggleCart}/>}
        
    </>
    )
}

function Menu({ setToggle }) {
    
    return (
        <div className='menu-container'>
            
            <a className='logo hide-on-large-screen' href='http://localhost:3000/'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>

            <div className='menu-exit' onClick={() => setToggle(false)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <ul className='menu-ul'>
                <li className='menu-li'>Shop</li>
                <li className='menu-li'>Learn</li>
                <li className='menu-li'>Company</li>
                <li className='menu-li'>Reviews</li>
            </ul>

            <a className='account'>
                <FontAwesomeIcon icon={faUser} />
                <p>Account</p>
            </a>
        </div>
    )
}

function Cart({ setToggleCart }) {
    return (
        <div className='cart-container'>
            
            <a className='logo hide-on-large-screen' href='http://localhost:3000/'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>

            <div className='cart-exit' onClick={() => setToggleCart(false)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            

        </div>
    )
}


function Darken({ toggle, setToggle, toggleCart, setToggleCart }) {
    return (
        <div className={`darken ${toggle || toggleCart ? 'show' : ''}`} onClick={() => {
            if (toggle === true) {
                setToggle(!toggle)
            }
            if (toggleCart === true) {
                setToggleCart(!toggleCart)
            }
        }}></div>
    )
}








export default Navbar