import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

// Components
import Header from '../header';

import './rechargehistory.css';

class RechargeHistory extends Component {
  constructor({ title, goto }) {
    super();
    this.state = {
      title: 'Mis recargas',
      goto: '/user'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    let item = document.getElementsByClassName('cancell')[0];
    item.parentNode.removeChild(item);
    document.getElementsByClassName('cancelled')[0].removeAttribute('hidden');
  }

  render() {
    const { title } = this.state;
    const { goto } = this.state;
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <div className="itemContainer rechargeHistory">
          <Row className="date">
            <Col xs={4} md={4}>
              <p>24/06/2018</p>
            </Col>
            <Col xs={4} md={4}>
              <p>4:09 PM</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>Recarga a través de transferencia</p>
              <p>Código: ADE-785-009</p>
            </Col>
          </Row>
          <Row className="total">
            <Col xs={12} md={12}>
              <p>Total: US$25</p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p><Glyphicon glyph="remove-sign" /> Cancelado</p>
              <small>*El reembolso se realizará dentro de los 14 días.</small>
            </Col>
          </Row>
        </div>
        <div className="itemContainer rechargeHistory">
          <Row className="date">
            <Col xs={4} md={4}>
              <p>14/06/2018</p>
            </Col>
            <Col xs={4} md={4}>
              <p>12:17 PM</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>Recarga a través de ServiPag</p>
              <p>Código: QYL-309-876</p>
            </Col>
          </Row>
          <Row className="total">
            <Col xs={12} md={12}>
              <p>Total: US$90</p>
              <hr />
            </Col>
          </Row>
          <Row className="cancellCont">
            <Col xs={12} md={12}>
              <p onClick={this.handleChange.bind(this)} className="cancell"><Glyphicon glyph="minus-sign" /> Cancelar</p>
            </Col>
            <Col className="cancelled" xs={12} md={12} hidden>
              <p><Glyphicon glyph="remove-sign" /> Cancelado</p>
              <small>*El reembolso se realizará dentro de los 14 días.</small>
            </Col>
          </Row>
        </div>
        <div className="itemContainer rechargeHistory">
          <Row className="date">
            <Col xs={4} md={4}>
              <p>9/06/2018</p>
            </Col>
            <Col xs={4} md={4}>
              <p>11:42 AM</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>Recarga a través de transferencia</p>
              <p>Código: LMR-291-337</p>
            </Col>
          </Row>
          <Row className="total">
            <Col xs={12} md={12}>
              <p>Total: US$10</p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p><Glyphicon glyph="ok-sign" /> Completado</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RechargeHistory;