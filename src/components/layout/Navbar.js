import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {

  const {toggleTheme, darkTheme} = useContext(ThemeContext);
  const bc = document.querySelector('body')

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  darkTheme.isDarkTheme ? (
    bc.style.backgroundColor = theme.body
  ) : (
    bc.style.backgroundColor = theme.body
  )

  return ( 
    <div className="container">
      <nav className={`nav-wrapper ${theme.nav_bg}`}>
          <span className={`brand-logo center ${theme.nav_text}`}><i className="material-icons">cloud_circle</i>MeteoWeather</span>
          <div className="switch right">
            <label>
            <input type="checkbox" onChange={toggleTheme}/>
            <span className="lever"></span>
            <i className="material-icons light-blue-text text-darken-4">brightness_3</i>
            </label>
          </div>
      </nav>
    </div>
  )
}
 
export default Navbar;