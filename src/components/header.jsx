import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ title, goto }) => (
  <div className="headerRe">
    <Row>
      <Col xs={1} md={1}>
        <Link to={ goto }>
          <Glyphicon glyph="chevron-left" className="backToUser" />
        </Link>
      </Col>
      <Col xs={10} md={10}>
        <h3>{ title }</h3>
      </Col>
    </Row>
  </div>
);

export default Header;