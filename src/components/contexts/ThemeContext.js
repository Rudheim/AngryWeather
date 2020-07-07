import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {

  const [darkTheme, setDarkTheme] = useState({
    isDarkTheme: true,
    light: {
      nav_bg: 'grey lighten-2',
      nav_text: 'grey-text text-darken-4'  ,
      bg: 'grey lighten-5',
      body: '#eeeeee',
      card: 'blue-grey lighten-4',
      card_text: 'grey-text text-darken-4',
      copy_footer: 'grey darken-2'
    },
      dark: {
      nav_bg: 'blue-grey darken-4',
      nav_text: 'white-text',
      bg: 'blue-grey darken-3',
      body: '#455a64',
      card: 'blue-grey',
      card_text: 'white-text',
      copy_footer: 'grey darken-4'
    }
  })

  const toggleTheme = () => {
    setDarkTheme({...darkTheme, isDarkTheme: !darkTheme.isDarkTheme})
  }

  return ( 
    <ThemeContext.Provider value={{toggleTheme, darkTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeProvider;