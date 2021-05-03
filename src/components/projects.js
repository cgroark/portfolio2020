import React from 'react';
import { Row, Col } from 'react-bootstrap';
import carbonCommute2 from '../images/carbon-commute2.png';
import liveSite from '../images/livesite.png';
import recycles from '../images/react_recycle_rates.gif';
import lottery from '../images/comment-lottery.gif';
import books from '../images/bookends-update.png'; 
import WeatherSearch from './WeatherSearch';
import PaceYourself from './PaceYourself';
require('dotenv').config();

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reactProjects: true,
            nodeProjects: false,
            vizProjects: false
        }
    }
    componentDidMount = () =>{
        this.props.pathname(window.location.pathname)
    }
    toggleReact = () => {
        this.setState({
            reactProjects: !this.state.reactProjects,
            nodeProjects: false,
            vizProjects: false
        })
    }
    toggleNode = () => {
        this.setState({
            reactProjects: false,
            nodeProjects: !this.state.nodeProjects,
            vizProjects: false
        })
    }
    toggleData = () => {
        this.setState({
            reactProjects: false,
            nodeProjects: false,
            vizProjects: !this.state.vizProjects
        })
    }
    render(){
        const { reactProjects, nodeProjects, vizProjects } = this.state;
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
                        <button disabled={vizProjects} className={vizProjects ? "active-projects" : ""} onClick={this.toggleData}>Data Visualization</button>
                    </div>
               
                    {reactProjects &&
                    <div id="react">
                        <h1>React</h1>
                        <Row>
                            <Col md={6} className="project-each">
                                    <div>
                                    <h2>Book Ends</h2>
                                    <p>Track the books you're reading, find new books, find your friends' books.</p>
                                    <p><strong>Technologies:</strong> React, HTML5, SASS, JavaScript, Google Books API, Google Sheets API</p>
                                    <img src={books} alt="screenshot of a website showing two graphs of commuting behavior" />
                                    <a href="http://www.bookends.design" target="_blank"><img src={liveSite} alt="icon of pc screen with code element" /><p>Visit live site</p></a>
                                   </div>
                            </Col>
                            <Col md={6} className="project-each">
                                <div>
                                    <h2>Weather Check</h2>
                                    <WeatherSearch />
                                </div>
                                <div>
                                    <h2>Pace Yourself</h2>
                                    <PaceYourself />
                                </div>
                            </Col>
                            {/* <Col md={6} className="project-each">
                                    <div>
                                    <h2>Comment Lottery</h2>
                                    <p>Built to improve the public meeting comment process, Comment Lottery assigns ticket numbers to would-be commenters, creates a randomized queue, and lets the user easily manage commenters through the queue.</p>
                                    <p><strong>Technologies:</strong> React, HTML5, CSS3, JavaScript, Google Sheets API</p>
                                    <img src={lottery} alt="screenshot of a website showing a button pressing and updating a queue of tickets" />
                                   </div>
                            </Col> */}
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
                    {vizProjects &&
                        <div id="data-viz">
                            <h1>Data Visualization</h1>
                            <Row>
                                <Col md={6}>
                                    <div>
                                    <h2>Carbon Commute</h2>
                                    <p>Track, log and chart carbon emissions of trips travelled based on distance and mode of transport</p>
                                    <p><strong>Technologies:</strong> Node.js/Express, Chart.js, PostgreSQL, Sequelize, RESTful API, JavaScript, JQuery, HTML5, CSS3, Bootstrap, Google Maps API</p>
                                    <img src={carbonCommute2} alt="screenshot of a website showing two graphs of commuting behavior" />
                                    <a href="https://carbon-commute.herokuapp.com/" target="_blank"><img src={liveSite} alt="icon of pc screen with code element" /><p>Visit live site</p></a>
                                   </div>
                                </Col>
                            
                                <Col md={6}>
                                    <div>
                                        <h2>Seattle Recycles</h2>
                                        <p>Access Seattle Recycling Rates via Socrata Open Source Data API. Select range and see two data visualizations of recycling rates over selected timeframe.</p>
                                        <p><strong>Technologies:</strong> React, Recharts, JavaScript, HTML5, CSS3, Socrata Open Source Data API</p>
                                        <img src={recycles} alt="moving image of graphs showing changing recycling rates in Seattle in various years" />
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