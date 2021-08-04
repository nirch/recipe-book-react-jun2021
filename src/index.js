import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parse from 'parse';

// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize('qOxaVtp8tHf0Z5CDE12tuyEi51bS4Ub64149mFDI', 'klPD3fyoFlvOcHozHN2UOPLPAY3GENgv4XcqDoyx');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
