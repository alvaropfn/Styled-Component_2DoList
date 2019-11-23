import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
