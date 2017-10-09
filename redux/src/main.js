import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

require('../scss/main.scss');

ReactDOM.render(
  <BrowserRouter>
	 <App />
  </BrowserRouter>,
document.getElementById('app')
)