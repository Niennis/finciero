// Dependencies
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../header';

// Assets
import './payMode.css';

class PayMode extends Component {
  constructor({ title }) {
    super();
    this.state = {
      title: 'Formas de pago',
      goto: '/recharge'
    }
  }
  render() {
    const { title } = this.state;
    const { goto } = this.state;
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h4>Conoce todas las formas de recargar tu tarjeta</h4>
          </Col>
        </Row>
        <div className="itemContainer">
          <Row>
            <Col xs={10} md={10}>
              <p className="rechargeOp">Transferencia en línea</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer">
          <Row>
            <Col xs={10} md={10}>
              <p className="rechargeOp">BancoEstado en línea</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer">
          <Row>
            <Col xs={10} md={10}>
              <p className="rechargeOp">Pago en efectivo en ServiPag</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer">
          <Row>
            <Col xs={10} md={10}>
              <p className="rechargeOp">Pago en efectivo en ServiEstado</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer">
          <Link to='/caja'>
            <Row>
              <Col xs={10} md={10}>
                <p className="rechargeOp">Pago en efectivo en Caja Vecina</p>
              </Col>
            </Row>
          </Link>
        </div>
      </div>
    );
  }
}

export default PayMode;