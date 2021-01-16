import React from 'react';
import { Row, Col } from 'react-bootstrap';
import css from '../images/css.png'
import graphql from '../images/graphql.png';
import html from '../images/html-5-png-8.png';
import jquery from '../images/jquery.png';
import js from '../images/js.png';
import node from '../images/node.png';
import reactLogo from '../images/react.png'

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
            <div className="main-body about">
                <Row>
                    <Col md={8}>
                        <h3>I'm a web developer based in Seattle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
                <h3>These are some of the technologies I use</h3>
                <div id="tech-images">
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
                        <img src={html} alt="" />
                        <p>HTML 5</p>
                    </div>
                    <div>
                        <img src={graphql} alt="" />
                        <p>GraphQL</p>
                    </div>
                    <div>
                        <img src={node} alt="" />
                        <p>node.js</p>
                    </div>
                </div>
            </div>
            </article>
           
        )
    }
}

export default About;