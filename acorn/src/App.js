import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Background from './components/Background';
import './App.css'

function App() {
  return (
    <div>
      
      <div className='top'>
        <Navbar />
        <Hero />
        <Background />
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </div>
      


      

    </div>

  );
}

export default App;
