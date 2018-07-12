import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Logo from '../../img/logo3.svg';
import { Link } from 'react-router-dom'

import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Jumbotron>
          <img src={Logo} alt="logo" className="logo" />
          <Row>
            <Col>
              <label className="labelLogin" htmlFor="">Usuario</label>
              <input type="mail" className="enterData" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="labelLogin" htmlFor="">Contraseña</label>
              <input type="text" className="enterData" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="remember">
                <input type="checkbox"/>
                <span className="checkmark"></span> Recordarme
              </label>
            </Col>
          </Row>
            <Link to='/user'>
              <p><Button bsStyle="info">Entrar</Button></p>
            </Link>
            <small><a href="">Olvidé mi contraseña</a></small>
        </Jumbotron>;
      </div>
        );
      }
    }
    
export default Login;