import React, { useState, createContext } from 'react';

export const FiveDayForecastContext = createContext();

const FiveDayForecastProvider = (props) => {

  const [fiveDayForecast, SetFiveDayForecast] = useState([])

  return ( 
    <div>
      <FiveDayForecastContext.Provider value={{fiveDayForecast, SetFiveDayForecast}}>
        {props.children}
      </FiveDayForecastContext.Provider>
    </div>
  );
}
 
export default FiveDayForecastProvider;