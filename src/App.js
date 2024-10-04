import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
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
import { LanguageProvider } from './contexts/LanguageContext';


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
    <HelmetProvider className=" font-gotham">
      <LanguageProvider>
        <Navbar />
        <Hero />
        <AboutUs />
        <Aboutmedicine />
        <DescriptionOne />
        <DescriptionTwo />
        <Indications />
        <Subscribe />
        <Footer />
      </LanguageProvider>
    </HelmetProvider>

  )
}

export default App
