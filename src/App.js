import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import './App.css';
import { Homepage } from './pages/homepage';
import { AboutUs } from './pages/about_us';
import { Timetable } from './pages/timetable';
import { ContactUs } from './pages/contact_us';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h2> Nam Yang Worthing Community Association</h2>
          <nav className="nav-bar">
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/"
            >
              Homepage
            </NavLink>
            <NavLink activeClassName="nav-link-active" to="/about">About us</NavLink>
            <NavLink activeClassName="nav-link-active" to="/timetable">Timetable</NavLink>
            <NavLink activeClassName="nav-link-active" to="/contact">Contact Us</NavLink>
          </nav>
        </header>
        <Switch>
          <div className="app-body">
            <Route path='/about'>
              <AboutUs />
            </Route>
            <Route path='/timetable'>
              <Timetable />
            </Route>
            <Route path='/contact'>
              <ContactUs />
            </Route>
            <Route exact path='/'>
              <Homepage />
            </Route>
          </div>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

