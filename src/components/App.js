// Dependencies
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Components
// import Navbar from './navbar/navbar.jsx';
import Content from './content/content.jsx';
import Footer from './footer/footer.jsx';

// Assets
import './App.css';
class App extends Component {
  // static propTypes = {
  //   children: PropTypes.object.isRequired
  // };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Content body={ children }/>
        <Footer/>
      </div>
    );
  }
}

export default App;
