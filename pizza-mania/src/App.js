import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Carousel from './components/Carousel';
import About from './components/About';
import PizzaTypes from './components/PizzaTypes';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <Carousel/>
   <About/>
   <PizzaTypes/>
   <Footer/>
   </>
  );
}

export default App;
