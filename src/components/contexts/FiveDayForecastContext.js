import React, { useState, createContext } from 'react';

export const FiveDayForecastContext = createContext();

const FiveDayForecastProvider = (props) => {

  const [fiveDayForecast, SetFiveDayForecast] = useState([])

  return ( 
    <FiveDayForecastContext.Provider value={{fiveDayForecast, SetFiveDayForecast}}>
      {props.children}
    </FiveDayForecastContext.Provider>
  );
}
 
export default FiveDayForecastProvider;