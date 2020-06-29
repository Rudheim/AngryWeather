import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext'

const GeoInfo = () => {

  const {cityDet} = useContext(CityContext)

  return ( 
    Object.keys(cityDet).length > 0 ? (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Geo position:</span>
          <p>Latitude: {cityDet.latitude}</p>
          <p>Longitude: {cityDet.longitude}</p>
          <p>Elevation: {cityDet.elevation}</p>
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
 
export default GeoInfo;