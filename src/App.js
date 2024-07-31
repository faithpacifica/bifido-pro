import Navbar from './components/Navbar';
import './index.css';  

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className=" font-gotham">
      <Navbar />
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
