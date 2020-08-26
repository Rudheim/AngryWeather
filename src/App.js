import React from 'react';
import ThemeProvider from './components/contexts/ThemeContext';
import WeatherProvider from './components/contexts/WeatherContext';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Homepage from './components/layout/Homepage';
import { Route, Switch, MemoryRouter} from 'react-router-dom';
import Footer from './components/layout/Footer'
// import { AnimatePresence } from 'framer-motion'

const App = () => {
  
  return (
    <MemoryRouter>
    <ThemeProvider>
      <WeatherProvider>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/weather' component={Dashboard} />
          </Switch>
        </main>
        <Footer/>
      </WeatherProvider>
    </ThemeProvider>
    </MemoryRouter>
  );
}
 
export default App;
