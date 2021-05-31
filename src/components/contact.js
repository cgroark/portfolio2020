import React from 'react';
import { Row, Col } from 'react-bootstrap';
import emailw from '../images/emailw.png';
import linkedinwhite from '../images/linkedinwhite.png';
import github1 from '../images/github1.png';

class Contact extends React.Component {
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
                <div>
                    <div className="main-body contact">
                        <article id="contact">
                            <Row>
                                <Col md={12}>
                                    <h2>Contact me</h2>
                                    <p><a href="mailto:colingroark@gmail.com">colingroark@gmail.com</a></p>
                                    <hr></hr>
                                </Col>  
                            </Row>
                            <Row>
                                <Col md={4}>
                                <a href="https://github.com/cgroark" target="_blank"><img src={github1} alt="github icon"></img></a>
                                </Col>
                                <Col md={4}>
                                <a href="https://www.linkedin.com/in/colin-groark/" target="_blank"><img src={linkedinwhite} alt="linkedin icon"></img></a>
                                </Col>
                                <Col md={4}>
                                <a href="mailto:colingroark@gmail.com"><img src={emailw} alt="email envelope icon"></img></a>
                                </Col>
                            </Row>
                        </article>
                    </div>
                </div>
            </article>
           
        )
    }
}

export default Contact;