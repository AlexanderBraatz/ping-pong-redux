import React from "react";
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import WinAlert from "./components/WinAlert";
import HistoryList from "./components/HistoryList";

const App = ({score1, score2, handleScoreFor1, handleScoreFor2, reset, servingP1, winner, history } ) => (
    <React.Fragment>
        {/* header */}
        <Header />

        {/* scores */}
        <div className="row mb-4">
          <ScoreCard 
            player = "1"
            serving = { servingP1 }
            score = { score1 }
            handleScore = { handleScoreFor1 }
            winner= { winner }
          />
          <ScoreCard 
            player = "2"
            serving = { !servingP1 }
            score = { score2 }
            handleScore = { handleScoreFor2 }
            winner= { winner }
          />
        </div>

        { /* winner message */}
        <WinAlert winner= { winner } />
        <hr />

        { /* reset button */}
        <button 
          onClick={ reset }
          className="btn btn-danger mb-2"
        >Reset</button>
        <HistoryList history= {history}/>
    </React.Fragment>
);

export default App;