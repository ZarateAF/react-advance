import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './routes/Navigation';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
