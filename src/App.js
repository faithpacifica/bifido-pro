import Navbar from './components/Navbar';
import './index.css';  // or wherever you placed the CSS file
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="text-red-600 font-bold">
      <Navbar />
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
