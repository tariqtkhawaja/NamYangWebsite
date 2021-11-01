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
import { Button } from "./components/button";
import { SignUp } from './components/signupbtn/sign_up';
import Logo from './Images/NAMYANGLogo.png'

function App() {
  const navbar = document.querySelector('#main');
  return (
    <div className="App">
      <Router>
        <header id="main">
          <nav className="nav-bar" >
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/"
            >
              <img
                input
                type="image"
                className="fit-logo"
                src={Logo}
                alt="Nam Yang Brighton Community Association"
              ></img>
            </NavLink>
            <NavLink activeClassName="nav-link-active" to="/about">About us</NavLink>
            <NavLink activeClassName="nav-link-active" to="/timetable">Timetable</NavLink>
            <NavLink activeClassName="nav-link-active" to="/contact">Contact Us</NavLink>
            <NavLink activeClassName="nav-link-active" to="/sign-up"><Button>Sign Up</Button></NavLink>
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
            <Route path='/sign-up'>
              <SignUp />
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

