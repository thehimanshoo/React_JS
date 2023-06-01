/*
    Bootstrap + MDBootstrap + FontAwesome + Custom Styles
 */
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
