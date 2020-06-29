import React, { useState, createContext } from 'react';

export const CityContext = createContext();

const CityProvider = (props) => {

  const [cityDet, SetCityDet] = useState({})

  return ( 
    <CityContext.Provider value={{cityDet, SetCityDet}}>
      {props.children}
    </CityContext.Provider>
  );
}
 
export default CityProvider;