import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Contacts = () => {

  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  return (
    <div className="footer_info row center">
      <div className="col s12 m6">
        <ul> 
            <li><a href="instagram" className="tooltipped btn-floating btn-small blue-grey lighten-1" data-tooltip="Instagram">
              <i className="icons fab fa-instagram"></i>
            </a></li>
            <li><a href="facebook" className="tooltipped btn-floating btn-small blue-grey lighten-1" data-tooltip="Facebook">
              <i className="icons fab fa-facebook"></i>
            </a></li>
            <li><a href="twitter" className="tooltipped btn-floating btn-small blue-grey lighten-1" data-tooltip="Twitter">
              <i className="icons fab fa-twitter"></i>
            </a></li>
            </ul>
      </div>
      <div className={`col s12 m6 ${theme.nav_bg} accu_weather_logo`}>
        <a href="https://developer.accuweather.com/"><img src="/img/AccuWeather_Logo.svg" alt="accu_weather_logo"/></a>
      </div>
    </div> 
   );
}
 
export default Contacts;