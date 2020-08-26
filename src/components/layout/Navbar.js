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
      <nav className={`nav-wrapper transparent`}>
          <div className="switch center">
            <label>
            <input type="checkbox" onChange={toggleTheme}/>
            <span className="lever"></span>
            <i className="material-icons light-blue-text text-darken-2">brightness_3</i>
            </label>
          </div>
      </nav>
  )
}
 
export default Navbar;