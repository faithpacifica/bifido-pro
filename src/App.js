import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import './index.css';  

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className=" font-gotham">
      <Navbar />
      <Hero />

      

      
  
    </div>
  );
}

export default App;
