import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import { Homepage } from './pages/homepage';
import { AboutUs } from './pages/about_us';
import { Timetable } from './pages/timetable';
import { ContactUs } from './pages/contact_us';

function App() {
  return (
    <div className="App">
      <header>
        <h2> Nam Yang Worthing Community Association</h2>
        <Router>
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About us</Link>
            <Link to="/timetable">Timetable</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <Switch>
            <div className="app-body">
              <Route path='/'>
                <Homepage />
              </Route>
              <Route path='/about'>
                <AboutUs />
              </Route>
              <Route path='/timetable'>
                <Timetable />
              </Route>
              <Route path='/contact'>
                <ContactUs />
              </Route>
            </div>
          </Switch>
        </Router>
      </header>

    </div>
  );
}

export default App;
