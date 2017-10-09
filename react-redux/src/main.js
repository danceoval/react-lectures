import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'

import App from './components/App';
import store from './redux/store'

require('../scss/main.scss');

ReactDOM.render(
	<Provider store={store}>
  		<BrowserRouter>
	 		<App />
  		</BrowserRouter>
  	</Provider>,
document.getElementById('app')
)