import React from 'react';
import ThemeProvider from './components/contexts/ThemeContext';
import WeatherProvider from './components/contexts/WeatherContext';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import M from "materialize-css";
import Homepage from './components/layout/Homepage';
import { Route, Switch, useLocation} from 'react-router-dom';
import Footer from './components/layout/Footer'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  M.AutoInit();
  
  const location = useLocation();

  return (
    <ThemeProvider>
      <WeatherProvider>
        <Navbar/>
        <main>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={Homepage} />
              <Route path='/weather' component={Dashboard} />
            </Switch>
          </AnimatePresence>
        </main>
        <Footer/>
      </WeatherProvider>
    </ThemeProvider>
  );
}
 
export default App;
