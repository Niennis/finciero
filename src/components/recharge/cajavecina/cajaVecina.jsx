import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Glyphicon } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { TiCloudStorageOutline } from "react-icons/lib/ti";

import Header from '../../header';

import './cajavecina.css'

class CajaVecina extends Component {
  constructor({ title, goto }) {
    super();
    this.state = {
      title: 'Pago con caja vecina',
      goto: '/paymode'
    }
  }
  render() {
    const { title } = this.state;
    const { goto } = this.state;
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <div className="instructionsCont">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="record" className="record" />
            </Col>
            <Col xs={10} md={10}>
              <p className="instructions">DIRÍGETE A TU CASA VECINA MÁS CERCANA.</p>
            </Col>
          </Row>
        </div>
        <div className="instructionsCont">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="record" className="record" />
            </Col>
            <Col xs={10} md={10}>
              <p className="instructions">INFORMA QUE QUIERES PAGAR FINCIERO.</p>
            </Col>
          </Row>
        </div>
        <div className="instructionsCont">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="record" className="record" />
            </Col>
            <Col xs={10} md={10}>
              <p className="instructions">DA NUESTRO CÓDIGO 12345.</p>
            </Col>
          </Row>
        </div>
        <div className="instructionsCont">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="record" className="record" />
            </Col>
            <Col xs={10} md={10}>
              <p className="instructions">REALIZA EL PAGO.</p>
            </Col>
          </Row>
        </div>
        <div className="instructionsCont">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="record" className="record" />
            </Col>
            <Col xs={10} md={10}>
              <p className="instructions">ENVÍA EL COMPROBANTE A</p>
              <p className="mailFinciero">pagos@finciero.com</p>
              <p className="instructions">O ENVÍALO DESDE AQUÍ <label htmlFor="ticket"><TiCloudStorageOutline className="uploadTicket"/></label>
              <input type="file" name="" id="ticket" accept=".jpg, .jpeg, .png"/>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CajaVecina;