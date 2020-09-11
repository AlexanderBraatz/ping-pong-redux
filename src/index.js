import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";

import store from "./data/store";



ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*^<Provider store= { store }>uses store and it's children props under the hood too open the way for props from the store to the components */





















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
