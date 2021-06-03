import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
// Easybase
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

ReactDOM.render(
  <React.StrictMode>
    <EasybaseProvider ebconfig={ebconfig}>
      <Router basename="/StudyBuddy/">
        <App />
      </Router>
    </EasybaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();