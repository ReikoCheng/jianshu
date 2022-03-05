import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import { GlobalStyle } from './statics/iconfont/iconfont.js';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



