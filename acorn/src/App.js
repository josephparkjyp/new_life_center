import Container from './components/Container'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './styles/App.css'

function App() {
  return (
    <div>
      <Navbar />
      
      <Container backgroundColor = {'#C2B9B9'}>
        <Hero 
          heading = {'Healthy is delicious.'}
          description = {'Healthy and delicious go hand in hand with our Korean acorn noodles. With benefits such as diabetes prevention, improved blood health, hemostatic effect and more, these noodles are a must-have for a healthier lifestyle.'}
          button = {'Shop Now'}
        />
      </Container>

      <Container backgroundColor = {'#C2B9B9'}>
        <Hero 
          heading = {'Dotori (Acorn) Noodles'}
          description = {'are a natural, healthy food made from a mixture of pure, non-polluted acorn flour, natural millet flour, corn flour, and wheat flour. They are free of artificial colors and preservatives, making them a great choice for those looking for healthier food options.'}
          button = {'Buy Now'}
        />
      </Container>

      <Container backgroundColor = {'#C2B9B9'}>
        <Hero 
          heading = {'Extreme Health Benefits'}
          description = {'According to a report by the Korean Energy Research Institute, 1 kilogram of acorn noodles can purify 3.5 tons of wastewater. In addition, they have been shown to be beneficial for individuals suffering from pollution-related diseases and heavy metal toxicity.'}
          button = {'Learn More'}
        />
      </Container>

      <Container backgroundColor = {'#C2B9B9'}>
        <Hero 
          heading = {'Versatile Noodle'}
          description = {'They are a popular ingredient in Korean cuisine, particularly for their unique flavor and texture, and can be used in a variety of dishes such as acorn noodle soup, bibimbap, cold noodles, and even in jajangmyeon (black bean sauce noodle) and spaghetti.'}
          button = {'View Recipes'}
        />
      </Container>

    </div>
  );
}

export default App;
