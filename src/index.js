import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styling/App.scss';
// Easybase
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

ReactDOM.render(
  <React.StrictMode>
    <EasybaseProvider ebconfig={ebconfig}>
      <Router basename="/sb/">
        <App />
      </Router>
    </EasybaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();