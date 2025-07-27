import { useContext } from 'react';
import LanguageContext from './LanguageContext';

function Welcome() {
  const { t } = useContext(LanguageContext);

  return <h1>{t.welcome}</h1>;
}

export default Welcome;
