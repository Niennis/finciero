import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class Language extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar className="languajeBtn">
          <DropdownButton title="Es/En" id="dropdown-size-medium">
            <MenuItem eventKey="1">Español</MenuItem>
            <MenuItem eventKey="2">English</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Language;

