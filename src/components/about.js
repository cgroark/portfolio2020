import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import css from '../images/css.png'
import graphql from '../images/graphql.png';
import html from '../images/html-5-png-8.png';
import jquery from '../images/jquery.png';
import js from '../images/js.png';
import node from '../images/node.png';
import reactLogo from '../images/react.png'
import postgresql from '../images/postgresql.png'
import github from '../images/github.png'
import self from '../images/Colin190.jpg'; 
import bitbucket from '../images/bitbucket.png'; 
import wordpress from '../images/wordpress.png'; 
import sass from '../images/sass.png'; 
import orchard from '../images/orchard-logo-black.png'; 
import uswds from '../images/uswds.png'; 
import analytics from '../images/Analytics.png'; 
import azure from '../images/azure.png';
import restfulapi from '../images/RESTful-API-logo-for-light-bg.png';
import resume from '../documents/GroarkColin_Resume_2021.pdf'

class About extends React.Component {
    componentDidMount = () =>{
        this.props.pathname(window.location.pathname)
    }
    render(){
        return(
            <article>
                <div className="other-heading">
                    <div>
                        <h1>Colin Groark</h1>
                    </div>
                </div>
            <div className="main-body">
                <article id="about">
                    <Row>
                        <Col md={8}>
                        <h2>Web Developer, Seattle</h2>
                        <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} >
                            <p className="lead">I'm a full-stack web developer who builds and maintains online tools and websites with a particular focus on mobile-optimization and accessibility. </p>
                            <hr></hr>
                            <p>I work with clients to build websites, surveys, and interactive maps that facilitate stakeholder engagement in community projects. To ensure equitable access, I keep accessibility and mobile responsiveness top of mind when designing and building products. With experience executing all stages of web development, a summary of skills includes: web hosting, deployment, frontend and backend web development, RESTful APIs, web design, Git and version control, accessibility, CMS building and maintenance, mobile optimization, Google Analytics, browser and device testing, and a solid understanding of HTML5, CSS3, and JavaScript. I've also stepped into the role of product manager for custom CRM software and the planning and delivery of client websites. </p>
                           
                        </Col>
                        <Col md={4}>
                            <img src={self} alt="headshot of colin groark, web developer" />
                            <div id="about-links">
                                <p><a href={resume} target="_blank">Check out my resume&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a></p>
                                <p><Link to={'/projects'}>See some recent work&nbsp;<i className="fa fa-code" aria-hidden="true"></i></Link></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={9} >
                    <h2>These are some of the technologies I use</h2>
                    <hr></hr>
                    <h3>Web development: frontend / backend</h3>
                    <div className="tech-images">
                        <div>
                            <img src={reactLogo} alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src={js} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img src={jquery} alt="" />
                            <p>jQuery</p>
                        </div>
                        <div>
                            <img src={css} alt="" />
                            <p>CSS 3</p>
                        </div>
                        <div>
                            <img src={sass} alt="" />
                            <p>Sass</p>
                        </div>
                        <div>
                            <img src={html} alt="" />
                            <p>HTML 5</p>
                        </div>
                        <div>
                            <img src={postgresql} alt="" />
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <img src={node} alt="" />
                            <p>node.js</p>
                        </div>
                        <div>
                            <img src={restfulapi} alt="" />
                            <p>RESTful API</p>
                        </div>
                        <div>
                            <img src={wordpress} alt="" />
                            <p>Wordpress CMS</p>
                        </div>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                        <h3>Data, hosting, user access</h3>
                        <div className="tech-images">
                            <div>
                                <img src={uswds} alt="" />
                                <p>Accessibility standards</p>
                            </div>
                            <div>
                                <img src={analytics} alt="" />
                                <p>Google Analytics</p>
                            </div>
                            <div>
                                <img src={azure} alt="" />
                                <p>Microsoft Azure</p>
                            </div>
                        </div>
                        </Col>
                        <Col md={4}>
                        <h3>Version control</h3>
                        <div className="tech-images">
                            <div>
                                <img src={github} alt="" />
                                <p>Github</p>
                                <br></br>
                            </div>
                            <div>
                                <img src={bitbucket} alt="" />
                                <p>Bitbucket</p>
                                <br></br>
                            </div>
                        </div>
                        </Col>
                        
                    </Row>
                </article>
            </div>
        </article>
           
        )
    }
}

export default About;