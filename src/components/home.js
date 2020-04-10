import React from 'react';
import Projects from '../components/projects'
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';

class Home extends React.Component {
    
    render(){
        return(
            <header className="App-header">
            <div>
                <h1>Hi, I'm Colin. </h1>
                <h2>web developer based in Seattle</h2>
                <h3>check out some of the things I've built</h3>
          </div>
          </header>
        )
    }
}

export default Home;