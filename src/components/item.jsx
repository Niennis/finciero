import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Item = ({ listItem }) => (
  <div>
    <Row className="menuItem">
      <Col xs={10} md={10} xsOffset={1} mdOffset={1}>
        <p className="menuTitle">{ listItem }</p>
      </Col>
    </Row>
  </div >
);


export default Item;