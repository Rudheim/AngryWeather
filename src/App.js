import React from 'react';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footer';
import CityProvider from './components/contexts/CityContext';
import WeatherProvider from './components/contexts/WeatherContext';
import FiveDayForecastProvider from './components/contexts/FiveDayForecastContext';
import TwelveHourForecastProvider from './components/contexts/TwelveHourForecasstContext';
import M from "materialize-css";
import Navbar from './components/layout/Navbar';
import ThemeProvider from './components/contexts/ThemeContext';

const App = () => {

  M.AutoInit();

  return (
    <ThemeProvider>
      <Navbar />
      <CityProvider>
        <WeatherProvider>
          <FiveDayForecastProvider>
            <TwelveHourForecastProvider>
              <Dashboard />
              </TwelveHourForecastProvider>
            </FiveDayForecastProvider>
          </WeatherProvider>
      </CityProvider>
      <Footer />
    </ThemeProvider>
  );
}
 
export default App;
