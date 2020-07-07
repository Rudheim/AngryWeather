import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';
import { ThemeContext } from '../contexts/ThemeContext';

const CityInfo = () => {

  const {cityDet} = useContext(CityContext)
  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  return (
    Object.keys(cityDet).length > 0 ? (
      <div className={`card ${theme.card}`}>
        <div className={`card-content ${theme.card_text}`}>
          <span className="card-title">City details:</span>
          <p>Full name: {cityDet.cityName}</p>
          <p>Country: {cityDet.country}</p>
          <p>Country index: {cityDet.countryShort}</p>
          <p>Region: {cityDet.region}</p>
          <p>Timezome: {cityDet.timezone}</p>
        </div>
      </div>    
    ) : (
      <div className={`card ${theme.card}`}>
        <div className={`card-content ${theme.card_text}`}>
         <p>No data</p>
        </div>
      </div>   
    )

  );
}
 
export default CityInfo;