import React from 'react';
import Projects from '../components/projects'
import { Link } from 'react-router-dom';
import githubwhite from '../images/gitwhite2.png';
import linked from '../images/linkedinwhite2.png';

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
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/projects'}>Recent work</Link></li>
                    <li><Link to={'/contact'} >Contact</Link></li>
                </ul>
                <div >
                <a href="https://github.com/cgroark" target="blank">
                    <img src={githubwhite} alt="github logo"/>
                </a>
                <a href="https://www.linkedin.com/in/colin-groark/" target="blank">
                    <img src={linked} alt="linkedin logo"/>
                </a>
                
                </div>
          </div>
          </header>
        )
    }
}

export default Home;