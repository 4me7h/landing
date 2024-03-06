import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
// import About from './components/About';
import Hero from './components/Hero';
// import Team from './components/Team';
// import Services from './components/Services';
import Contact from './components/Contact';

import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      {/* <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="team">
        <Team />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
