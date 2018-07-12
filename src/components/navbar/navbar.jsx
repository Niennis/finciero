import React, { Component } from 'react';
import { Navbar, Col, Row, Glyphicon } from 'react-bootstrap';
import Language from './language.jsx';

import logo from '../../img/logo3.svg';

import './navbar.css';

class navbar extends Component {
  render() {
    return (
      <div className="navTop">
        <Navbar fixedTop>
          <Row>
            <Col xs={6} md={6}>
              <Navbar.Brand>
                <a href="#brand"> <img src={logo} alt="logoFinciero"/> </a>
              </Navbar.Brand>
            </Col>
            <Col xs={6} md={6}>
              <Row>
                <Col xs={6} md={6}>
                  <Language />
                </Col>
                <Col xs={2} md={2}>
                  <Glyphicon glyph="envelope" className="envelope" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
