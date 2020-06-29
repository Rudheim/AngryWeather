import React, { useState, createContext } from 'react';

export const TwelveHourForecastContext = createContext();

const TwelveHourForecastProvider = (props) => {

  const [TwelveHourForecast, SetTwelveHourForecast] = useState ([])

  return ( 
    <div>
      <TwelveHourForecastContext.Provider value={{TwelveHourForecast, SetTwelveHourForecast}}>
        {props.children}
      </TwelveHourForecastContext.Provider>
    </div>
   );
}
 
export default TwelveHourForecastProvider;