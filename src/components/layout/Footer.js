import React, { useContext }  from 'react';
import Contacts from '../footer/Contacts';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {

  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  return ( 
    <div className="container">
      <footer className={`page-footer ${theme.nav_bg}`}>
          <Contacts />
        <div className={`footer-copyright  ${theme.copy_footer}`}>
          <div className={`container ${theme.copy_footer} center-align`}>&copy; 2020 .netHeim</div>
        </div>
      </footer>
    </div>
  );
}
 
export default Footer;