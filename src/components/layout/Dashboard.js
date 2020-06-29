import React from 'react';
import MainScreen from '../dashboard/MainScreen';
import CityInfo from '../dashboard/CityInfo';
import FiveDaysForecast from '../dashboard/FiveDaysForecast';
import TwelveHourForecast from '../dashboard/TwelveHourForecast';
import GeoInfo from '../dashboard/GeoInfo';

const Dashboard = () => {
  return ( 
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <MainScreen />
          <TwelveHourForecast />
        </div>
        <div className="col s12 m3">
          <CityInfo />
        </div>
        <div className="col s12 m3">
          <GeoInfo />
        </div>
        <div className="col s12 m6">
          <FiveDaysForecast />
        </div>
      </div>
    </div>
   );
}
 
export default Dashboard;