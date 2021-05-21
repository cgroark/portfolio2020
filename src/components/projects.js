import React from 'react';
import { Row, Col } from 'react-bootstrap';
import carbonCommute2 from '../images/carbon-commute2.png';
import liveSite from '../images/livesite.png';
import recycles from '../images/react_recycle_rates.gif';
import lottery from '../images/comment-lottery.gif';
import books from '../images/bookends-update.png'; 
import booksOne from '../images/bookends-1.png';
import WeatherSearch from './WeatherSearch';
import PaceYourself from './PaceYourself';
require('dotenv').config();

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reactProjects: true,
            nodeProjects: false,
            cmsProjects: false
        }
    }
    componentDidMount = () =>{
        this.props.pathname(window.location.pathname)
    }
    toggleReact = () => {
        this.setState({
            reactProjects: !this.state.reactProjects,
            nodeProjects: false,
            cmsProjects: false
        })
    }
    toggleNode = () => {
        this.setState({
            reactProjects: false,
            nodeProjects: !this.state.nodeProjects,
            cmsProjects: false
        })
    }
    toggleData = () => {
        this.setState({
            reactProjects: false,
            nodeProjects: false,
            cmsProjects: !this.state.cmsProjects
        })
    }
    render(){
        const { reactProjects, nodeProjects, cmsProjects } = this.state;
        return(
            <article>
                <div className="other-heading">
                    <div>
                        <h1>Colin Groark</h1>
                    </div>
                </div>
                <div className="main-body projects">
                    <div className="projects-nav">
                        <button disabled={reactProjects} className={reactProjects ? "active-projects" : ""} onClick={this.toggleReact}>React</button>
                        <button disabled={nodeProjects} className={nodeProjects ? "active-projects" : ""} onClick={this.toggleNode}>Node.js</button>
                        <button disabled={cmsProjects} className={cmsProjects ? "active-projects" : ""} onClick={this.toggleData}>CMS</button>
                    </div>
               
                    {reactProjects &&
                    <div id="react">
                        <h1>React</h1>
                        <Row>
                            <Col md={6} className="project-each">
                                    <div>
                                    <h2>Book Ends</h2>
                                    <p>Track the books you're reading, find new books, see your friends' reading list.</p>
                                    <div className='tech-section'><p><strong>React, HTML5, SASS, JavaScript, Google Books API, Google Sheets API</strong> </p></div>
                                    <a href="http://www.bookends.design" target="_blank"><img src={liveSite} alt="icon of pc screen with code element" /><p>Visit live site</p></a>
                                    <img src={booksOne} alt="screenshot of a website recent book updates and bestsellers" />
                                   
                                   </div>
                            </Col>
                            <Col md={6} className="project-each">
                                <div>
                                    <h2>Pace Yourself</h2>
                                    <p>Set goals and get raceday pace guidance.</p>
                                    <div className='tech-section'><p><strong> React, HTML5, CSS3, JavaScript, Regex</strong></p></div>
                                    <h3>Try the live demo below</h3>
                                    <PaceYourself />
                                </div>
                                <div>
                                    <h2>Weather Check</h2>
                                    <p>Check the weather in your area.</p>
                                    <div className='tech-section'><p><strong> React, HTML5, CSS3, JavaScript, Regex, Open Weather Map API</strong></p></div>
                                    <h3>Try the live demo below</h3>
                                    <WeatherSearch />
                                    
                                </div>
                            </Col>
                           
                        </Row>
   
                     
                    </div>
                    }
                    {nodeProjects &&
                        <div id="node">
                            <h1>Node.js</h1>
                            <Row>
                                <Col md={6}>
                                    <div>
                                    <h2>Carbon Commute</h2>
                                    <p>Track, log and chart carbon emissions of trips travelled based on distance and mode of transport</p>
                                    <p><strong>Technologies:</strong> Node.js/Express, Chart.js, PostgreSQL, Sequelize, RESTful API, JavaScript, JQuery, HTML5, CSS3, Bootstrap, Google Maps API</p>
                                    <a href="https://carbon-commute.herokuapp.com/" target="_blank"><img src={liveSite} alt="icon of pc screen with code element" /><p>Visit live site</p></a>
                                    </div>
                                </Col>
                            
                                <Col md={6}>
                                    <div>
                                        <img src={carbonCommute2} alt="screenshot of a website showing two graphs of commuting behavior" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    }
                    {cmsProjects &&
                        <div id="cms">
                            <h1>CMS</h1>
                            <Row>
                                <Col md={6}>
                                    <div>
                                    one
                                   </div>
                                </Col>
                            
                                <Col md={6}>
                                    <div>
                                        two
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    }
                </div> 
            </article>
           
        )
    }
}

export default Projects;