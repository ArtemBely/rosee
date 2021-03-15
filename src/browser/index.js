import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
      <App data={window.__INITIAL_DATA__}/>
  </BrowserRouter>,
  document.getElementById('app')
);
