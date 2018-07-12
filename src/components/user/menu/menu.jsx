import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './menu.css';

class menu extends Component {
  render() {
    return (
      <div>
        <Link to='/transactions'>
          <Row className="menuItem">
            <Col xs={2} md={2}>
              <Glyphicon glyph="list-alt" className="menuIcon" />
            </Col>
            <Col xs={10} md={10}>
              <p className="menuTitle">Historial de Transacciones</p>
            </Col>
          </Row>
        </Link>
        <Link to='/history'>
          <Row className="menuItem">
            <Col xs={2} md={2}>
              <Glyphicon glyph="stats" className="menuIcon" />
            </Col>
            <Col xs={10} md={10}>
              <p className="menuTitle">Mis recargas</p>
            </Col>
          </Row>
        </Link>
        <Link to='/profile'>
          <Row className="menuItem">
            <Col xs={2} md={2}>
              <Glyphicon glyph="user" className="menuIcon" />
            </Col>
            <Col xs={10} md={10}>
              <p className="menuTitle">Mis datos</p>
            </Col>
          </Row>
        </Link>
        <Link to='/commerces'>
          <Row className="menuItem">
            <Col xs={2} md={2}>
              <Glyphicon glyph="shopping-cart" className="menuIcon" />
            </Col>
            <Col xs={10} md={10}>
              <p className="menuTitle">Comercios habilitados</p>
            </Col>
          </Row>
        </Link>
        <Link to='/'>
          <Row className="menuItem">
            <Col xs={2} md={2}>
              <Glyphicon glyph="plus-sign" className="menuIcon" />
            </Col>
            <Col xs={10} md={10}>
              <p className="menuTitle">Agregar pagos con Finciero</p>
            </Col>
          </Row>
        </Link>
      </div>
    );
  }
}

export default menu;