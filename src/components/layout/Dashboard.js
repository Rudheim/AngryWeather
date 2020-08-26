import React, { useContext } from 'react';
import MainScreen from '../dashboard/MainScreen';
import CityInfo from '../dashboard/CityInfo';
import FiveDaysForecast from '../dashboard/FiveDaysForecast';
import TwelveHourForecast from '../dashboard/TwelveHourForecast';
import GeoInfo from '../dashboard/GeoInfo';
import CitySearch from '../homepage/CitySearch';
import { WeatherContext } from '../contexts/WeatherContext';
import { motion } from 'framer-motion'
import { Redirect } from 'react-router-dom';


const cardsVariants = {
  hidden_left: { x: '-100vw' },
  hidden_right: { x: '100vw' },
  hidden_top: { y: '-100vw' },
  hidden_bottom: { y: '100vw' },
  visible: { x: 0, y: 0, transition: { duration: 1 } }
}

const Dashboard = () => {

  const {cityDet} = useContext(WeatherContext);

  return (
    Object.keys(cityDet).length > 0 ? (
      <div className="container">
        <div className="search-bar">
          <CitySearch />
        </div>
        <div className="row">
          <div className="col s12 m6">
            <motion.div variants={cardsVariants} initial='hidden_left' animate='visible' >
              <MainScreen />
            </motion.div>
            <motion.div variants={cardsVariants} initial='hidden_bottom' animate='visible' >
              <FiveDaysForecast />
            </motion.div>                        
          </div>
          <div className="col s12 m6">
            <motion.div variants={cardsVariants} initial='hidden_top' animate='visible' >
              <TwelveHourForecast />
            </motion.div>
          </div>
        </div>
        <motion.div className="row" variants={cardsVariants} initial='hidden_bottom' animate='visible'>
          <div className="col s12 m6">
            <CityInfo />
          </div>
          <div className="col s12 m6">
            <GeoInfo />
          </div>
        </motion.div>
      </div>
      ) : (
      <div className='transparent search'>
          <Redirect to="/" />
      </div>
    )
  );
}
 
export default Dashboard;