import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header';
import App from './App';
import Footer from './layout/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
