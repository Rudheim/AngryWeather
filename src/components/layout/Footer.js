import React, { useContext }  from 'react';
import Contacts from '../footer/Contacts';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';


const logoVariants = {
  hidden:{ opacity: 0 },
  visible:{ opacity: 1, transition: { duration: 2} },
  exit:{ y: '100vw', transition: { duration: 1, ease: 'easeInOut'} }
}

const Footer = () => {

  const {darkTheme} = useContext(ThemeContext);
  const location = useLocation();

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark;

  const position = location.pathname === "/" ? 'fixed' : 'relative'

  return ( 
      <motion.footer className="page-footer transparent" style={{position: `${position}`}}
        variants={logoVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
          <Contacts />
        <div className="footer-copyright transparent">
          <div className={`${theme.nav_text} transparent container center`}>&copy; 2020 .netHeim</div>
        </div>
      </motion.footer>
  );
}
 
export default Footer;