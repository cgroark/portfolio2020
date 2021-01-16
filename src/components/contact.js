import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
                        <Row>
                            <Col md={8}>
                                <h1>This is the Contact page</h1>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <p>this is additional content</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </article>
           
        )
    }
}

export default Contact;