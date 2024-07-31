import AboutUs from './components/AboutUs';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import './index.css';  

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="font-bold text-red-600">
      
      <Navbar />
      <h1>{t('welcome')}</h1> 
      <AboutUs/>
    <div className=" font-gotham">
      <Navbar />
      <Hero />

      <h1>{t('welcome')}</h1>
    </div>
    </div>
  )
}

export default App
