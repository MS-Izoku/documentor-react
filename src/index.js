import React from 'react';
import ReactDOM from 'react-dom';

//#region CSS

//#region MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//#endregion

import "./css/App.scss"

// import './index.css';
// import './App.css'
// import './css/Neumorphic.css'
// import "./css/QuickFlexgrid.css"
//#endregion

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
