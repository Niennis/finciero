import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Header from '../header';

import './profile.css';

class Profile extends Component {
  constructor({ title, goto }) {
    super();
    this.state = {
      title: 'Mis datos',
      goto: '/user',
      count: 0
    }

    this.editData = this.editData.bind(this);
    this.backToData = this.backToData.bind(this);
  }

  renderData() {
    return (
      <div className="profileCont">
        <Row>
          <Col>
            <label>Nombre</label>
            <p className="profileItem">Daniela Andrea</p>
            <label>Apellidos</label>
            <p className="profileItem">Gutiérrez</p>
            <label>Fecha de nacimiento</label>
            <p className="profileItem">03/01/1989</p>
            <label>Celular</label>
            <p className="profileItem">+569 721 511 08</p>
            <label>Correo</label>
            <p className="profileItem">test@finciero.com</p>
            <label>Dirección</label>
            <p className="profileItem">Holanda 23 depto 1312</p>
            <label>Código postal</label>
            <p className="profileItem">1234567890</p>
            <label>Ciudad/Localidad</label>
            <p className="profileItem">Providencia</p>
            <label>Región</label>
            <p className="profileItem">Metropolitana</p>
          </Col>
        </Row>
        <Row>
          <Col className="contact">
            <label>* Si deseas editar algo, por favor <a onClick={this.editData} href="">Haz click aquí</a></label>
          </Col>
        </Row>
      </div>
    )
  }

  editData(e) {
    e.preventDefault();
    this.setState({
      count: 1
    })
  }

  renderEdit() {
    return(
      <div className="profileCont">
        <Row>
          <Col>
            <label>Nombre</label>
            <input className="profileItem" placeholder="Daniela Andrea"></input>
            <label>Apellidos</label>
            <input className="profileItem" placeholder="Gutiérrez"></input>
            <label>Fecha de nacimiento</label>
            <input className="profileItem" placeholder="03/01/1989"></input>
            <label>Celular</label>
            <input className="profileItem" placeholder="+569 721 511 08"></input>
            <label>Correo</label>
            <input className="profileItem" placeholder="test@finciero.com"></input>
            <label>Dirección</label>
            <input className="profileItem" placeholder="Holanda 23 depto 1312"></input>
            <label>Código postal</label>
            <input className="profileItem" placeholder="1234567890"></input>
            <label>Ciudad/Localidad</label>
            <input className="profileItem" placeholder="Providencia"></input>
            <label>Región</label>
            <input className="profileItem" placeholder="Metropolitana"></input>
          </Col>
        </Row>
        <Row>
          <Col className="contact">
            <Button type="submit" bsStyle="info" onClick={this.backToData} className="sendData">Enviar</Button>
            <label>* La actualización de los datos se realizará</label>
            <label>dentro de las siguientes 72hrs</label>
          </Col>
        </Row>
      </div>
    )
  }

  backToData() {
    this.setState({count:0})
  }

  render() {
    const { title } = this.state;
    const { goto } = this.state;
    const { count } = this.state;
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        { count === 0 ? this.renderData() : this.renderEdit()}
      </div>
    );
  }
}

export default Profile;