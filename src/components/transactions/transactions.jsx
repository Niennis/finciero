import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Header from '../header';

import './transactions.css';

class Transactions extends Component {
  constructor({ title, goto, props }) {
    super(props);
    this.state = {
      title: 'Historial transacciones',
      goto: '/user',
      value: 'Todos los movimientos',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Your favorite flavor is: ' + this.state.value);

    let all = document.getElementsByClassName('all');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute('hidden', true);
    };
    let selected = document.getElementsByClassName(this.state.value);
    for (let j = 0; j < selected.length; j++) {
      selected[j].removeAttribute('hidden');
    }    
    event.preventDefault();
  }

  render() {
    const { title } = this.state;
    const { goto } = this.state;
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <div className="selectTransactions">
          <Row>
            <form onSubmit={this.handleSubmit}>
              <label>
                Mostrar
                <select value={this.state.value} name="trans" id="selectTrans" onChange={this.handleChange}>
                  <option value="all">Todos los movimientos</option>
                  <option value="success">Transacciones exitosas</option>
                  <option value="fail">Transacciones fallidas</option>
                </select>
              </label>
              <Button type="submit" value="Send" bsStyle="info">Cargar</Button>
            </form>
          </Row>
        </div>
        <div className="titleTransactions">
          <Row>
            <Col xs={2} md={2}>
              <p>Fecha</p>
            </Col>
            <Col xs={6} md={6}>
              <p>Descripción</p>
            </Col>
            <Col xs={3} md={3}>
              <p>Monto(US$)</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer fail all" value="fail">
          <Row>
            <Col xs={2} md={2}>
              <p>13/06</p>
            </Col>
            <Col xs={7} md={7}>
              <p>Carta Gateway Top-Up</p>
            </Col>
            <Col xs={3} md={3}>
              <p className="amount">50</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer success all">
          <Row>
            <Col xs={2} md={3}>
              <p>11/06</p>
            </Col>
            <Col xs={7} md={7}>
              <p>BEATPORT 720-974-9500 Purchase</p>
            </Col>
            <Col xs={3} md={3}>
              <p className="amount">10</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer fail all">
          <Row>
            <Col xs={2} md={2}>
              <p>01/04</p>
            </Col>
            <Col xs={7} md={7}>
              <p>Bata Bag 345-678-934</p>
            </Col>
            <Col xs={3} md={3}>
              <p className="amount">10</p>
            </Col>
          </Row>
        </div>
        <div className="itemContainer success all">
          <Row>
            <Col xs={2} md={2}>
              <p>02/03</p>
            </Col>
            <Col xs={7} md={7}>
              <p>BEATPORT
              720-974-9500 Purchase</p>
            </Col>
            <Col xs={3} md={3}>
              <p className="amount">23</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Transactions;