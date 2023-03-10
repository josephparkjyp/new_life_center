import React, { useRef } from 'react'
import FadeInOnIntersect from './components/FadeOnIntersect'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './styles/App.css'

import front_page from "./images/front-page-opacity.png"
import cold_noodles from "./images/cold-noodles.jpg"
import spicy2 from "./images/spicy2.jpg"
import tomato_noodle from "./images/tomato-noodle.jpg"

function App() {
  
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })
  
  return (
    <div>
      <Navbar />
      
      <Container backgroundImage={front_page} height='100vh' min_height='750px'>
        <FadeInOnIntersect shouldWaitForLoad={true}>
          <div className='main-hero'> 
            <h1 className='main-heading'>Healthy is delicious.</h1>
            <p className='main-description'>Healthy and delicious go hand in hand with our Korean acorn noodles. With benefits such as diabetes prevention, improved blood health, hemostatic effect and more, these noodles are a must-have for a healthier lifestyle.</p>
            <button className='main-button' onClick={executeScroll}>Shop Now</button>
          </div>
        </FadeInOnIntersect>
      </Container>

      <Container>
        <Hero 
          header = 'Dotori (Acorn) Noodles'
          paragraph = 'are a natural, healthy food made from a mixture of pure, non-polluted acorn flour, natural millet flour, corn flour, and wheat flour. They are free of artificial colors and preservatives, making them a great choice for those looking for healthier food options.'
          button_text = 'Buy Now'
          img_url = {cold_noodles}
        />
      </Container>

      <Container backgroundColor={'#d9d9d950'}>
        <Hero 
          header = 'Extreme Health Benefits'
          paragraph = 'According to a report by the Korean Energy Research Institute, 1 kilogram of acorn noodles can purify 3.5 tons of wastewater. In addition, they have been shown to be beneficial for individuals suffering from pollution-related diseases and heavy metal toxicity.'
          button_text = 'Learn More'
          img_url = {tomato_noodle}
          reverse = {true}
        />
      </Container>

      <Container>
        <Hero 
          header = 'Versatile Noodle'
          paragraph = 'They are a popular ingredient in Korean cuisine, particularly for their unique flavor and texture, and can be used in a variety of dishes such as acorn noodle soup, bibimbap, cold noodles, and even in jajangmyeon (black bean sauce noodle) and spaghetti.'
          button_text = 'View Recipes'
          img_url = {spicy2}
        />
      </Container>


      <Container backgroundColor={'#C2B9B975'} ref={myRef}>
        <FadeInOnIntersect>
          <Product />
        </FadeInOnIntersect>
      </Container>
        
      <Footer />
    </div>
  );
}

export default App;
