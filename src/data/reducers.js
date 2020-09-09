import initial from "../data/initial";



// defining a reducer that can handle dispatched actions and change the state appropriately 
const reducer = (state, action) => { 
  switch(action.type){
    case "INCREMENT" : return win(server(score(state, action)));//chaining means server is passed the up to date state
    case "RESET" : return reset(track(state));
    default: return state;
  }
}

//reducer logic
const score = (state, {who}) => ({ ...state, [who] : state[who] + 1 });



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


//handle reset, without losing the history

const reset = (state) => ({...initial, history : state.history});


// handle tracking the hisory of past games

const track = (state) => {
  let {player1, player2, winner, history} = state;

  let lastResults = {
    player_1: {
        score: player1,
        won: winner === 1,
    },

    player_2: {
        score: player2,
        won: winner === 2,
    }
  };

  let newHistory = [...history,lastResults];

  return({...state, history : (winner > 0 ?newHistory : history) }) 
}

export default reducer ;