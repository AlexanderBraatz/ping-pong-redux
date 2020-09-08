import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";



// setting the initial state
const initial = { 
  player1: 0,
  player2: 0,
};


// defining a reducer that can handle dispatched actions and change the state appropriately 
const reducer = (state, action) => { 
  switch(action.type){
    case "INCREMENT_PL1" : return { ...state, player1: state.player1 + 1 };
    case "INCREMENT_PL2" : return { ...state, player2: state.player2 + 1 };
    default: return state;
  }
}

// making a redux store with my reducer and initial state
const store = createStore(reducer, initial); 


// making a render function that re-renders the whole app when called 
const render = () =>{

  let {player1, player2} = store.getState();
  console.log(player1);


  ReactDOM.render(
    <React.StrictMode>
      <App 
        score1={player1}  
        score2={player2}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// *sucbscribe*-> call the render (app) function whenever the reducer in store produces a new state
store.subscribe(render);
render(); //and render once on initial loading of the page
//^this re-rende the whole app is very inefficient and only used here to demonstrate using the redux store


/*
store.dispatch({type: "INCREMENT_PL1",})
store.dispatch({type: "INCREMENT_PL1",})
store.dispatch({type: "INCREMENT_PL1",})


console.log(reducer(initial, {type : "INCREMENT_PL1" }));
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
