import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Navbar = () => {
  const { t, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav style={{display:'flex', gap:'10px', height:'40px',margin:'10px',fontSize:'20px'}}>
      <span style={{margin:'10px'}}>{t.home}</span>
      <span style={{margin:'10px'}}>{t.about}</span>
      <button style={{fontSize:'20px'}} onClick={toggleLanguage}>{t.toggle}</button>
    </nav>
  );
};

export default Navbar;
