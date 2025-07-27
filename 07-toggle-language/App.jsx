import './App.css';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Welcome from './Welcome';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Welcome />
    </LanguageProvider>
  );
}

export default App;
