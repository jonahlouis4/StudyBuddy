import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import "bootswatch/dist/litera/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styling/App.scss';
import './styling/index.css';

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