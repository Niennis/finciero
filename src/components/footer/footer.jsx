import React, { Component } from 'react';
import { Row, Col, Glyphicon, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './footer.css';

class footer extends Component {
  render() {
    return (
      <div className="footer">
        <Navbar fixedBottom className="containerFooter">
          <Row>
            <Col xs={3} md={3}>
              <Link to='/user'>
              {/* <TiHomeOutline className="footerIcon"/> */}
                <Glyphicon glyph="home" className="footerIcon"/>
              </Link>
            </Col>
            <Col xs={3} md={3}>
              <Link to='/recharge'>            
                <Glyphicon glyph="usd" className="footerIcon"/>
                {/* <TiDatabase className="footerIcon"/> */}
              </Link>
            </Col> 
            <Col xs={3} md={3}>
              <Glyphicon glyph="question-sign" className="footerIcon"/>
            </Col> 
            <Col xs={3} md={3}>
              <Glyphicon glyph="log-out" className="footerIcon"/>
            </Col>            
          </Row>
        </Navbar>
      </div>
    );
  }
}

export default footer;