import React, { useContext, useEffect }  from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion'
import M from "materialize-css";


const logoVariants = {
  hidden:{ opacity: 0 },
  visible:{ opacity: 1, transition: { duration: 2} },
  exit:{ y: '100vw', transition: { duration: 1, ease: 'easeInOut'} }
}

const buttonsVariants={
  hover: { y: -15, transition: { yoyo: Infinity } }
}

const Footer = () => {

  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark;

  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  }, [])

  return ( 
    <motion.footer className="transparent"  variants={logoVariants} initial='hidden' animate='visible' exit='exit'>
      <div className="footer_info row center">
        <div className="col s12 m6">
          <ul> 
            <li><motion.a href="https://telegram.dog/Rudheim" className="tooltipped btn-floating btn-small blue lighten-1" data-position="top" data-tooltip="Telegram" variants={buttonsVariants} initial='initial' whileHover='hover' >
              <i className="icons fab fa-telegram-plane"></i>
            </motion.a></li>
            <li><motion.a href="viber://chat?number=+380965263155" className="tooltipped btn-floating btn-small blue lighten-1" data-position="top" data-tooltip="Viber" variants={buttonsVariants} whileHover='hover' >
              <i className="icons fab fa-viber"></i>
            </motion.a></li>
            <li><motion.a href="http://m.me/100011799960695" className="tooltipped btn-floating btn-small blue lighten-1" data-position="top" data-tooltip="Messenger" variants={buttonsVariants} whileHover='hover' >
              <i className="icons fab fa-facebook-messenger"></i>
            </motion.a></li>
          </ul>
        </div>
        <div className="col s12 m6 transparent accu_weather_logo">
          <a href="https://developer.accuweather.com/"><img src="/img/AccuWeather_Logo.svg" alt="accu_weather_logo"/></a>
        </div>
      </div> 
      <div className="footer-copyright transparent">
        <div className={`${theme.nav_text} transparent container center`}> <a href="http://netheim.net">&copy; 2020 .netHeim</a></div>
      </div>
    </motion.footer>
  );
}
 
export default Footer;