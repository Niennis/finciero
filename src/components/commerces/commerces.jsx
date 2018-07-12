import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';

// Components
import Header from '../header';
import CommercesItem from './commercesItem';
// import ModalCom from './modal';

// Assets
import './commerces.css';
import Amazon from '../../img/amazon.png';
import Ebay from "../../img/ebay.png";
import Google from "../../img/google_play.png";
import Steam from "../../img/steam.png";
import Uber from "../../img/uber.png";
import Appstore from "../../img/app_store.png";
import Aliexpress from "../../img/aliexpress.png";
import Despegar from "../../img/despegar.png";
import Itunes from "../../img/itunes.png";
import Netflix from "../../img/netflix.png";
import Spotify from "../../img/spotify.png";
import Paypal from "../../img/paypal.png";


class Commerces extends Component {
  constructor({ title, goto, image, count, modal }) {
    super();
    this.state = {
      title: 'Comercios habilitados',
      goto: '/user',
      show: false,
      image,
      count: 0,
      modal: 0
    };

    this.handleShowAmazon = this.handleShowAmazon.bind(this);
    this.handleShowEbay = this.handleShowEbay.bind(this);
    this.handleShowGoogle = this.handleShowGoogle.bind(this);
    this.handleShowNetflix = this.handleShowNetflix.bind(this);
    this.handleShowUber = this.handleShowUber.bind(this);
    this.handleShowDespegar = this.handleShowDespegar.bind(this);
    this.handleShowPaypal = this.handleShowPaypal.bind(this);
    this.handleShowItunes = this.handleShowItunes.bind(this);
    this.handleShowAliexpress = this.handleShowAliexpress.bind(this);
    this.handleShowSpotify = this.handleShowSpotify.bind(this);
    this.handleShowSteam = this.handleShowSteam.bind(this);
    this.handleShowAppstore = this.handleShowAppstore.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShowAmazon(e) {
    e.preventDefault();
    this.setState({ show: true , modal: 1});
  }

  handleShowItunes(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 2 });
  }

  handleShowNetflix(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 3 });
  }

  handleShowSpotify(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 4 });
  }

  handleShowAliexpress(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 5 });
  }

  handleShowEbay(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 6 });
  }

  handleShowGoogle(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 7 });
  }

  handleShowSteam(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 8 });
  }

  handleShowUber(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 9 });
  }

  handleShowAppstore(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 10 });
  }

  handleShowPaypal(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 11 });
  }

  handleShowDespegar(e) {
    e.preventDefault();
    this.setState({ show: true, modal: 12 });
  }

  renderAmazon() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Amazon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.amazon.com/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  renderItunes() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>iTunes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.apple.com/cl/itunes/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderNetflix() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Netflix</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.netflix.com/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderSpotify() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Spotify</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.spotify.com/cl/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderAliexpress() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aliexpress</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://es.aliexpress.com/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderEbay() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ebay</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.ebay.com/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderGoogle() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Google Store</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://play.google.com/store?hl=es" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderSteam() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Steam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://store.steampowered.com/games/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderUber() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Uber</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.uber.com/es-CL/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderAppstore() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AppStore</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://itunes.apple.com/cl/genre/ios/id36?mt=8" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderPaypal() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PayPal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.paypal.com/cl/home" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  renderDespegar() {
    return (
      <div>
        <Modal className="modalCont" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Despegar.com</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <h5>Paso 1</h5>
            <p>Crear una cuenta con un correo diferente al que tienes registrado en el sitio.</p>
            <h5>Paso 2</h5>
            <p>Seleccionar el medio de pago e ingresar los datos de tu Tarjeta Finciero, los cuales se encuentran en tu sesión de Finciero.com.</p>
            <h5>Paso 3</h5>
            <p>Si tu registro fue exitoso, te aparecerá un mensaje, donde verificas que ya puedes utilizar tu cuenta con tu Tarjeta Max Virtual.</p>
            <a href="https://www.despegar.cl/" target="_blank">Ve al sitio</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  renderData() {
    const images = [
      { name: 'Amazon', image: Amazon, onClick: this.handleShowAmazon },
      { name: 'iTunes', image: Itunes, onClick: this.handleShowItunes},
      { name: 'Netflix', image: Netflix, onClick: this.handleShowNetflix},
      { name: 'Spotify', image: Spotify, onClick: this.handleShowSpotify},
      { name: 'PayPal', image: Paypal, onClick: this.handleShowPaypal},
      { name: 'Ebay', image: Ebay, onClick: this.handleShowEbay },
      { name: 'Google store', image: Google, onClick: this.handleShowGoogle },
      { name: 'Steam', image: Steam, onClick: this.handleShowSteam},
      { name: 'Uber', image: Uber, onClick: this.handleShowUber},
      { name: 'AppStore', image: Appstore, onClick: this.handleShowAppstore},
      { name: 'Aliexpress', image: Aliexpress, onClick: this.handleShowAliexpress},
      { name: 'Despegar.com', image: Despegar, onClick: this.handleShowDespegar}
    ];

    return images.map(data => (
      <Col xs={6} md={6} key={data.name}>
        <CommercesItem image={data.image} nameCommerce={data.name} onClick={data.onClick} />
        {/* <ModalCom nameCommerce={data.name} linkCommerce={data.url} /> */}
      </Col>
    ))
  }

  componentDidMount() {
    this.setState({
      count: 1
    })
  }

  renderProgress() {
    return (<div></div>)
  }

  render() {
    const { title } = this.state;
    const { goto } = this.state;
    const { count } = this.state;
    const { show } = this.state;
    const { modal } = this.state;

    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <Row className="commerceCont">
          {count !== 0 ? this.renderData() : this.renderProgress()}
          { show === false ? this.renderProgress() : (
            modal === 1 ? this.renderAmazon() : (
              modal === 2 ? this.renderItunes() : (
                modal === 3 ? this.renderNetflix() : (
                  modal === 4 ? this.renderSpotify() : (
                    modal === 5 ? this.renderAliexpress() : (
                      modal === 6 ? this.renderEbay() : (
                        modal === 7 ? this.renderGoogle() : (
                          modal === 8 ? this.renderSteam() : (
                            modal === 9 ? this.renderUber() : (
                              modal === 10 ? this.renderAppstore() : (
                                modal === 11 ? this.renderPaypal() : (
                                  modal === 12 ? this.renderDespegar() : this.renderProgress()
                                )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )}
        </Row>
      </div>
    );
  }
}

export default Commerces;