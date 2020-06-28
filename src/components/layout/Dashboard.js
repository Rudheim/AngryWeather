import React from 'react';
import MainScreen from '../dashboard/MainScreen';
import CityInfo from '../dashboard/CityInfo';
import FiveDaysForecast from '../dashboard/FiveDaysForecast';
import TwelveHourForecast from '../dashboard/TwelveHourForecast';

const Dashboard = () => {
  return ( 
    <div className="container">
      <MainScreen />
      <CityInfo />
      <FiveDaysForecast />
      <TwelveHourForecast />
    </div>
   );
}
 
export default Dashboard;