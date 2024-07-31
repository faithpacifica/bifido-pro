import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import './index.css';  // or wherever you placed the CSS file
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="font-bold text-red-600">
      <Navbar />
      <h1>{t('welcome')}</h1> 
      <AboutUs/>
    </div>
  );
}

export default App;
