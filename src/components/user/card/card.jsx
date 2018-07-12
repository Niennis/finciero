import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
// import card from '../../../img/max_bg.png';

import fincieroWhite from '../../../img/logo-big.png';
import './card.css';

class Card extends Component {

  showData() {
    let showHide = document.getElementsByClassName('hiddenData');
    for (let i = 0; i < showHide.length; i++) {
      
      if(showHide[i].hasAttribute('hidden')) {
        showHide[i].removeAttribute('hidden');
        setTimeout(function(){
          showHide[i].setAttribute('hidden', true)
        }, 2000);        
      }
      else {
        showHide[i].setAttribute('hidden', true);
        setTimeout(function(){
          showHide[i].removeAttribute('hidden')
        }, 2000);        
      }
    }
  }

  render() {
    return (
      <div className="contCard">
        <div className="card">
            <Row>
              <Col xs={4} md={4}>
                <img src={fincieroWhite} alt="logoBig"/>
              </Col>
            </Row>
              <Col xs={12} md={12}>
                <h4 className="hiddenData data" hidden>1234 1234 1234 1234</h4>
                <h4 className="hiddenData data" >**** **** **** 1234</h4>
              </Col>
            <Row>
              <Col xs={4} md={4}>
                <p className="hiddenData data" >**/**</p>
                <p className="hiddenData data" hidden>12/12</p>
                <h6>Válido hasta</h6>
              </Col>
              <Col xs={8} md={8}>
                <p className="hiddenData data" >****</p>
                <p className="hiddenData data" hidden>1234</p>
                <h6>Código de verificación (CVV)</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button bsStyle="info" className="hideData" onClick={this.showData}>
                <p className="hiddenData">Mostrar información <Glyphicon glyph="eye-open"/></p>
                <p className="hiddenData" hidden>Ocultar información <Glyphicon glyph="eye-close"/></p>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="money">US$10</h3>
                <small>Saldo disponible</small>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Card;