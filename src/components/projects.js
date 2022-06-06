import React from 'react';
import { Row, Col } from 'react-bootstrap';
import carbonCommute2 from '../images/carbon-commute2.png';
import liveSite from '../images/livesite.png';
import recycles from '../images/react_recycle_rates.gif';
import lottery from '../images/comment-lottery.gif';
import books from '../images/bookends-update.png'; 
import avOne from '../images/av-1.png';
import avTwo from '../images/av-2.png';
import pse from '../images/pse-1.png';
import sr522 from '../images/sr522.png';
import booksOne from '../images/bookends-1.png';
import poSite from '../images/po-staging.png'
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
                                    <h2 className="project-title">Book Ends</h2>
                                    <p>Track the books you're reading, find new books, see your friends' reading list.</p>
                                    <div className='tech-section'><p><strong>React, HTML5, SASS, JavaScript, Google Books API, Google Sheets API</strong> </p></div>
                                    <a href="http://www.bookends.design" target="_blank">Visit live site&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                                    <img className="sample-image" src={booksOne} alt="screenshot of a website recent book updates and bestsellers" />
                                   
                                   </div>
                            </Col>
                            <Col md={6} className="project-each">
                                <div>
                                    <h2 className="project-title">Pace Yourself</h2>
                                    <p>Set goals and get raceday pace guidance.</p>
                                    <div className='tech-section'><p><strong> React, HTML5, CSS3, JavaScript, Regex</strong></p></div>
                                    <h3>Try the live demo below</h3>
                                    <PaceYourself />
                                </div>
                            
                            </Col>
                           
                        </Row>
   
                     
                    </div>
                    }
                    {nodeProjects &&
                        <div id="node">
                            <h1>Node.js</h1>
                            <Row>
                                <Col md={12} className="project-each">
                                    <Row>
                                        <Col md={6} >
                                            <div>
                                                <h2 className="project-title">Carbon Commute</h2>
                                                <p>Track, log and chart carbon emissions of trips travelled based on distance and mode of transport</p>
                                                <div className='tech-section'><p><strong>Node.js/Express, Chart.js, PostgreSQL, Sequelize, RESTful API, JavaScript, JQuery, HTML5, CSS3, Bootstrap, Google Maps API</strong> </p></div>
                                                <a href="https://carbon-commute.herokuapp.com/" target="_blank">Visit live site&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                                            </div>
                                        </Col>
                                        <Col md={6} >
                                            <div>
                                                <img className="sample-image" src={carbonCommute2} alt="screenshot of a website showing two graphs of commuting behavior" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    }
                    {cmsProjects &&
                        <div id="cms">
                            <h1>CMS</h1>
                            <Row>
                            <Col md={6} className="project-each">
                                <div>
                                    <h2 className="project-title">Participate.Online Splash Page</h2>
                                    <p>Built for EnviroIssues to highlight design and feature updates to participate.online websites built to communicate updates on public infrastrucutre projects in the Pacific Northwest. </p>
                                    <div className='tech-section'><p><strong>WordPress (CMS), HTML5, CSS3, JavaScript, JQuery</strong> </p></div>
                                    <a href="https://participateonline-2-22-staging.azurewebsites.net/" target="_blank">Visit live site&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                                    <img  className="sample-image"src={poSite} alt="screenshot of a website text" />
                                </div>
                                <div>
                                    <h2 className="project-title">Sound Transit corridor map</h2>
                                    <p>Built for Sound Transit to provide users an interactive map of the Sr 522/NE 145th Bus Rapid Transit corridor as design alternatives are considered.</p>
                                    <div className='tech-section'><p><strong>Orchard Content Management System (CMS), HTML5, CSS3, JavaScript, JQuery, Google Maps API</strong> </p></div>
                                    <img  className="sample-image"src={sr522} alt="screenshot of a website with a map" />
                                    
                                </div>
                            </Col>
                            <Col md={6} className="project-each">
                                    <div>
                                    <h2 className="project-title">Autonomous Vehicles Workgroup</h2>
                                    <p>Built for Washington State Transportation Commission to provide updates on the arrival of autonomous vehicles in the State </p>
                                    <div className='tech-section'><p><strong>Orchard Content Management System (CMS), HTML5, CSS3, JavaScript, JQuery</strong> </p></div>
                                    <a href="https://avworkgroupwa.org/" target="_blank">Visit live site&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                                    <img  className="sample-image"src={avTwo} alt="screenshot of a website text" />
                                    
                                    <img  className="sample-image"src={avOne} alt="screenshot of a website with a banner image" />
                                    
                                   
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