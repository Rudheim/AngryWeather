import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext'

const CityInfo = () => {

  const {cityDet} = useContext(CityContext)

  return (
    Object.keys(cityDet).length > 0 ? (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">City details:</span>
          <p>Full name: {cityDet.cityName}</p>
          <p>Counrty: {cityDet.country}</p>
          <p>Country index: {cityDet.countryShort}</p>
          <p>Region: {cityDet.region}</p>
          <p>Timezome: {cityDet.timezone}</p>
        </div>
      </div>    
    ) : (
      <div className={`card blue-grey darken-1`}>
        <div className="card-content white-text">
         <p>No data</p>
        </div>
      </div>   
    )

  );
}
 
export default CityInfo;