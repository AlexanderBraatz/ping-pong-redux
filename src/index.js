import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import { Provider } from "react-redux";

import initial from "./data/initial";
import reducer from "./data/reducers"






// making a redux store with my reducer and initial state and implementing redux-localstorage
const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
reducer,
initial,
composeEnhancers(persistState())
);



// handeling events
  const handleScoreFor1 = () => {
    store.dispatch({type: "INCREMENT", who : "player1"});
  }
  const handleScoreFor2 = () => {
    store.dispatch({type: "INCREMENT", who : "player2"})
  }
  const resetit = () => {
    store.dispatch({ type: "RESET"})
  }


    ReactDOM.render(
      <React.StrictMode>
         <Provider store={ store }> {/*uses store and it's children prop under the hood too open the way for props from the store to the components */}
          <App 
            handleScoreFor1={ handleScoreFor1 }
            handleScoreFor2={ handleScoreFor2 }

            resetit= { resetit }
          />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
