// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <AppRoutes/>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
