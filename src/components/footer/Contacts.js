import React from 'react';
import { motion } from 'framer-motion'

const buttonsVariants={
  hover:{
    y: -15,
    transition:{
      yoyo: Infinity
    }
  }
}

const Contacts = () => {
  
  return (
    <div className="footer_info row center">
      <div className="col s12 m6">
        <ul> 
          <li><motion.a href="#" className="tooltipped btn-floating btn-small blue lighten-1" data-tooltip="Instagram"
            variants={buttonsVariants}
            whileHover='hover'
          >
            <i className="icons fab fa-instagram"></i>
          </motion.a></li>
          <li><motion.a href="#" className="tooltipped btn-floating btn-small blue lighten-1" data-tooltip="Facebook"
            variants={buttonsVariants}
            whileHover='hover'
          >
            <i className="icons fab fa-facebook"></i>
          </motion.a></li>
          <li><motion.a href="#" className="tooltipped btn-floating btn-small blue lighten-1" data-tooltip="Twitter"
            variants={buttonsVariants}
            whileHover='hover'
          >
            <i className="icons fab fa-twitter"></i>
          </motion.a></li>
          </ul>
      </div>
      <div className="col s12 m6 transparent accu_weather_logo">
        <a href="https://developer.accuweather.com/"><img src="/img/AccuWeather_Logo.svg" alt="accu_weather_logo"/></a>
      </div>
    </div> 
   );
}
 
export default Contacts;