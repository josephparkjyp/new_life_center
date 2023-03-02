import './Footer.css'
import Container from './Container.js'
import React from 'react'

function Footer() {
    return (
        <>
            <Container backgroundColor={'#d9d9d950'}>
                <div className='newsletter-container'>
                    <h2 className='newsletter-header'>Sign up for news, recipes, and more from New Life Center.</h2>
                    <form>
                        <input className='newsletter-input' type='email' placeholder='Enter email address'></input>
                        <button className='newsletter-button' type='button'>Subscribe</button>
                    </form>
                </div>
            </Container>

            <div className='breaker'></div>

            <Container backgroundColor={'#f4f6f8'}>
                <div className='footer-container'>
                    <div className='footer-main'>
                        
                        <div className='footer-about'>
                            <h3 className='footer-header'>About New Life Center</h3>
                            <p>New Life Center is a family-run business that specializes in producing handmade acorn noodles. With a focus on quality and tradition, the company has been producing these unique and delicious noodles for generations.</p>
                        </div>

                        <div className='footer-quick'>
                            <h3 className='footer-header'>Quick links</h3>
                            <ul className='footer-ul'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Learn</li>
                                <li>About</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                        <div className='footer-resources'>
                            <h3 className='footer-header'>Useful resources</h3>
                            <ul className='footer-ul'>
                                <li>Cooking tips</li>
                                <li>Our recipes</li>
                            </ul>
                        </div>

                        <div className='footer-policies'>
                            <h3 className='footer-header'>Policies</h3>
                            <ul className='footer-ul'>
                                <li>Terms of service</li>
                                <li>Refund and returns</li>
                                <li>Privacy</li>
                                <li>Shipping</li>
                            </ul>
                        </div>

                    </div>                
                </div>
            </Container>
            
            <Container>
                <div className='footer-footer'>
                    <p>New Life Center ©2023</p>
                </div>
            </Container>
        </>
    )
}

export default Footer