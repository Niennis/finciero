// Dependencies
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../header';

// Assets
import './payMode.css';

class Recharge extends Component {
  constructor({ title }) {
    super();
    this.state = {
      title: 'Pago con caja vecina',
      goto: '/user'
    }
  }
  render() {
    const { title } = this.state;
    const { goto } = this.state;

    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <div className="quantity">
          <Row>
            <Col xs={12}>
              <h2>¿Cuánto quiero cargar?</h2>
              <h2>US$ <input type="number" placeholder="Ingresar cantidad en dólares" /></h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Link to='/paymode'>
                <Button bsStyle="info">Solicitar</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Recharge;

