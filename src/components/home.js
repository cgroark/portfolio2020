import React from 'react';
import Projects from '../components/projects'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    componentDidMount = () =>{
        this.props.pathname(window.location.pathname)
    }
    render(){
        return(
            <header className="App-header">
            <div>
                <h1>Colin Groark</h1>
                <h2>Web Developer</h2>
                <h3>Seattle</h3>
                <ul className="home-navigation">
                    <li><Link to={'/projects'}>Recent work</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'} >Contact</Link></li>
                </ul>
                
          </div>
          </header>
        )
    }
}

export default Home;