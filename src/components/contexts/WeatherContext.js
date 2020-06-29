import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = (props) => {

  const [weather, SetWeather] = useState({})

  return ( 
    <div>
      <WeatherContext.Provider value={{weather, SetWeather}}>
        {props.children}
      </WeatherContext.Provider>
    </div> 
  );
}
 
export default WeatherProvider;