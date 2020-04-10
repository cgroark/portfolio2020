import React from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import About from './components/about';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <Router>
          <article className='navigation'>
            <div>
              <ul>
              <li>
                  <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" exact activeClassName="active" to="/projects">Recent Work</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" exact activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" exact activeClassName="active" to="/contact" >Contact</NavLink>
                </li>
              </ul>
           </div>
          </article>
          <Route exact path="/"  render={() => <Home />} />
          <Route exact path="/projects"  render={() => <Projects />} />
          <Route exact path="/about"  render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Router>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
     
        
    </div>
  );
}

export default App;
