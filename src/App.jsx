import {BrowserRouter } from 'react-router-dom';
import {Footer, Meows, Hero, Navbar, More, StarsCanvas} from './components';


const App = () =>{

  return (
    <BrowserRouter>
        <div className='relative z-0 w-full'>
        <div className='fixed top-0 left-0 w-full h-full'>
          <StarsCanvas />
          {/* this is the bling bling background! */}
        </div>
        <Navbar />
        <Hero />
        <Meows />
        <More />
        <Footer />
      </div>
      
    </BrowserRouter>
  )
}

export default App
