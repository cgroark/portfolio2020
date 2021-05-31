import React from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import About from './components/about';
import logo from './logo.svg';
import './App.scss';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        pathname: ''
      }
  }
  componentDidMount = () => {
    const pathname = window.location.pathname;
    this.setState({
      pathname: pathname
    })
  }
  getPathName = (pathname) => {
    this.setState({
      pathname: pathname
    })
  }
  render() {
    const { pathname} = this.state;
    return (
      <div className="App">
        
        <Router>
          {pathname !== '/' &&
            <article className='navigation'>
              <div>
                <ul>
                <li>
                    <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" exact activeClassName="active" to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" exact activeClassName="active" to="/projects">Recent Work</NavLink>
                  </li>
                  
                  <li>
                    <NavLink className="nav-link" exact activeClassName="active" to="/contact" >Contact</NavLink>
                  </li>
                </ul>
              
            </div>
            </article>
          }
            <Route exact path="/"  render={() => <Home pathname={this.getPathName} /> } />
            <Route exact path="/projects"  render={() => <Projects pathname={this.getPathName}/>} />
            <Route exact path="/about"  render={() => <About pathname={this.getPathName}/>} />
            <Route exact path="/contact" render={() => <Contact pathname={this.getPathName}/>} />
          </Router>
          
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }
}
export default App;