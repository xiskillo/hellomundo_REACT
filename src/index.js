import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Despedida from './components/Despedida'
import Saludo from './components/Saludo'





ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Despedida nombre="XiSKiLLo" />, document.getElementById('despedida'));

ReactDOM.render(<Saludo />, document.getElementById('saludo'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
