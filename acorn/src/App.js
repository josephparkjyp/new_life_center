import FadeInOnIntersect from './components/FadeOnIntersect'
import Container from './components/Container'
import Navbar from './components/Navbar'
import './styles/App.css'

import front_page from "./images/front-page-opacity.png"

function App() {
  return (
    <div>
      <Navbar />
      
      <Container backgroundImage={front_page}>
        <FadeInOnIntersect>
          <div className='main-hero'> 
            <h1 className='main-heading'>Healthy is delicious.</h1>
            <p className='main-description'>Healthy and delicious go hand in hand with our Korean acorn noodles. With benefits such as diabetes prevention, improved blood health, hemostatic effect and more, these noodles are a must-have for a healthier lifestyle.</p>
            <button className='main-button'>Shop Now</button>
          </div>
        </FadeInOnIntersect>
      </Container>

      <Container backgroundColor={'white'}>

        <div style={{border: '1px solid red'}}>Healthy and delicious go hand in hand with our Korean acorn noodles. With benefits such as diabetes prevention, improved blood health, hemostatic effect and more, these noodles are a must-have for a healthier lifestyle.</div>

      </Container>
      

    </div>
  );
}

export default App;
