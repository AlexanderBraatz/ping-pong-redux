import initial from "../data/initial";



// defining a reducer 
const reducer = (state, action) => { 
  switch(action.type){
    case "INCREMENT" : return win(server(score(state, action)));//chaining means server is passed the up to date state
    case "RESET" : return reset(track(state));
    case "START" : return startReducer(state, action);
    default: return state;
  }
}

//reducer logic
const score = (state, {who}) => ({ ...state, [who] : state[who] + 1 });



//reducer business logic

//handle starting after settings have been submited

const startReducer = (state, {name1, name2, winScore, alternation}) => {
  return({
    ...state,
    name1,
    name2,
    winScore,
    alternation,
    started: true,
  })
}

//handle who is serving

const server = (state) => { 
  let {player1, player2, alternation} = state ;
  let sum =  player1 +  player2 ;
  let alternate = sum % (alternation*2) < alternation;

  if (player1>=20 && player2>=20){ alternate = sum % 4 < 2;}
  else{alternate = sum %(alternation*2) < alternation;}
  return(
    {...state, servingP1: alternate }
  );
}


//handle who has won

const win = (state) => {
  let {player1, player2, winScore} = state ;
  let win = 0;
  if (Math.abs(player1-player2) >=2){
    if (player1 >= winScore) {win=1}
    if (player2 >= winScore) {win=2}
  }
  return(
    {...state, winner: win  }
  )
}


//handle reset, without losing the history

const reset = (state) => (
  {
    ...initial,
     history : state.history,
     name1: state.name1,
     name2: state.name2,
     winScore: state.winScore,
     alternation: state.alternation,
  });


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