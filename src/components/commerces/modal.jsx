import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalCom extends Component {
  constructor(props, context, nameCommerce, linkCommerce) {
    super(props, context);
    this.state = {
      show: false,
      nameCommerce,
      linkCommerce
    };
  }

  render() {
    const { nameCommerce } = this.state;
    const { linkCommerce } = this.setState;
    return (
      <div className="modalCont">
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{nameCommerce}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>DCrear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href={linkCommerce}>Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalCom;