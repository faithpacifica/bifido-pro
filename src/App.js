import React, { useEffect } from 'react';
import Aboutmedicine from './components/Aboutmedicine';
import AboutUs from './components/AboutUs';
import DescriptionOne from './components/DescriptionOne';
import DescriptionTwo from './components/DescriptionTwo';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import Indications from './components/Indications';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import './index.css';  
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);
  
  return (
    <div className=" font-gotham">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Aboutmedicine/>
      <DescriptionOne/>
      <DescriptionTwo />
      <Indications />
      <Subscribe />
      <Footer />
    </div>
  
  )
}

export default App
