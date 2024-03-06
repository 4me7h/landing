import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Hero from './components/Hero';
import Team from './components/Team';
import Micro from './components/Micro';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Products />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
