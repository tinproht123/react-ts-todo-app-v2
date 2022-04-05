import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.scss';
import store from './app/store';
import { Provider } from 'react-redux';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
