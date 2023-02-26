import './Navbar.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    // Sticky Navbar
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // To change classes for Menu.
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [toggleMenu, setToggleMenu] = useState(false)

    function updateMenu() {
        if (!toggleMenu) {
            setMenuClass('menu visible')
        } 
        else {
            setMenuClass('menu hidden')
        }
        setToggleMenu(!toggleMenu)
        updateBlock()
    }

    // To change classes for Cart.
    const [cart_class, setCartClass] = useState('cart hidden')
    const [toggleCart, setToggleCart] = useState(false)

    function updateCart() {
        if (!toggleCart) {
            setCartClass('cart visible')
        } 
        else {
            setCartClass('cart hidden')
        }
        setToggleCart(!toggleCart)
        updateBlock()
    }

    const [block_class, setBlockClass] = useState('block hidden')

    function updateBlock() {
        if (block_class === 'block hidden') {
            setBlockClass('block visible')
        }
        else {
            setBlockClass('block hidden')
        }
    }

    return (
        <>
            <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
                <div className='nav-items'>
                    <p className='menu-button' onClick={updateMenu}>MENU</p>
                    <a className='logo' href='http://localhost:3000/'>
                        <p className='logo-top'>NEW LIFE</p>
                        <p className='logo-bot'>C E N T E R</p>
                    </a>
                    <p className='cart-button' onClick={updateCart}>CART (0)</p>
                </div>
            </div>
        
            <Block block_class={block_class} toggleMenu={toggleMenu} toggleCart={toggleCart} updateMenu={updateMenu} updateCart={updateCart}></Block>
            <Menu menu_class={menu_class} updateMenu={updateMenu}></Menu>
            <Cart cart_class={cart_class} updateCart={updateCart}></Cart>
        </>
    )

}

function Menu(props) {
    return (
        <div className={props.menu_class}>            
            <a className='logo hide-on-large-screen' href='http://localhost:3000/'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>

            <div className='menu-exit' onClick={props.updateMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
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

function Cart(props) {
    return (
        <div className={props.cart_class}>
            <a className='logo hide-on-large-screen' href='http://localhost:3000/'>
                <p className='logo-top'>NEW LIFE</p>
                <p className='logo-bot'>C E N T E R</p>
            </a>

            <div className='cart-exit' onClick={props.updateCart}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

function Block(props) {
    return (
        <div className={props.block_class} onClick={() => {
            if (props.toggleMenu) {
                props.updateMenu()
            }
            if (props.toggleCart) {
                props.updateCart()
            }
        }}></div>
    )
}

export default Navbar