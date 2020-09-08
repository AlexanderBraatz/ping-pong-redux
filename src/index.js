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
  servingP1: true,
  winner: 0,
};

//----------------------------------------------reducer
// defining a reducer that can handle dispatched actions and change the state appropriately 
const reducer = (state, action) => { 
  switch(action.type){
    case "INCREMENT" : return win(server(score(state, action)));//chaining means server is passed the up to date state
    case "RESET" : return initial;
    default: return state;
  }
}
//reducer logic
const score = (state,{who}) => ({ ...state, [who] : state[who] + 1 });
//reducer business logic
//handle who is serving
const server = (state) => { 
  let {player1, player2} = state ;
  let sum =  player1 +  player2 ;
  let alternate = sum % 10 < 5;

  if (player1>=20 && player2>=20){ alternate = sum % 4 < 2;}
  else{alternate = sum % 10 < 5;}
  return(
    {...state, servingP1: alternate }
  );
}
//handle who has won
const win = (state) => {
  let {player1, player2} = state ;
  let win = 0;
  if (Math.abs(player1-player2) >=2){
    if (player1 >= 21) {win=1}
    if (player2 >= 21) {win=2}
  }
  return(
    {...state, winner: win  }
  )
}

//----------------------------------------------reducer

// making a redux store with my reducer and initial state
const store = createStore(reducer, initial); 


// making a render function that re-renders the whole app when called 
const render = () =>{

  let {player1, player2, servingP1, winner} = store.getState();

// handeling events
  const handleScoreFor1 = () => {
    store.dispatch({type: "INCREMENT", who : "player1"});
    console.log(winner)
  }
  const handleScoreFor2 = () => {
    store.dispatch({type: "INCREMENT", who : "player2"})
  }
  const reset = () => {
    store.dispatch({ type: "RESET"})
  }



  ReactDOM.render(
    <React.StrictMode>
      <App 
        score1={player1}  
        score2={player2}
        handleScoreFor1={ handleScoreFor1 }
        handleScoreFor2={ handleScoreFor2 }
        servingP1= { servingP1 }
        winner = {winner}
        reset= { reset }
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
