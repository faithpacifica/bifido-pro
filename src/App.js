import Aboutmedicine from './components/Aboutmedicine';
import AboutUs from './components/AboutUs';
import DescriptionOne from './components/DescriptionOne';
import DescriptionTwo from './components/DescriptionTwo';
import { Hero } from './components/Hero';
import Indications from './components/Indications';
import Navbar from './components/Navbar';
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

    </div>
  
  )
}

export default App
