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

// import { useTranslation } from 'react-i18next';

function App() {
  // const { t } = useTranslation();
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
