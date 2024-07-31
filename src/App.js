import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';  

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className=" font-gotham">
      <Navbar />
      <Hero />

      

      
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
