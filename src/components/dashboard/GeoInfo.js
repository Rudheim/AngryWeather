import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { ThemeContext } from '../contexts/ThemeContext';

const GeoInfo = () => {

  const {cityDet} = useContext(WeatherContext)
  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  return ( 
    Object.keys(cityDet).length > 0 ? (
      <div className={`card ${theme.card}`}>
        <div className={`card-content ${theme.card_text}`}>
          <span className="card-title">Geo position:</span>
          <p>Latitude: {cityDet.latitude}</p>
          <p>Longitude: {cityDet.longitude}</p>
          <p>Elevation: {cityDet.elevation}</p>
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
 
export default GeoInfo;