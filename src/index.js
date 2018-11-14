import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store.js'
import {Provider} from 'react-redux'
import DeliveryProblemForm from './components/delivery-problem-form';

ReactDOM.render(
  <Provider store={store}>
    <DeliveryProblemForm/>
  </Provider>,
  document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
