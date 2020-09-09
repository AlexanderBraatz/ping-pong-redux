import React from "react"; 
import Header from "./Header";
import ScoreCard1 from "./ScoreCard/ScoreCard1";
import ScoreCard2 from "./ScoreCard/ScoreCard2";
import WinAlert from "./WinAlert";
import HistoryList from "./HistoryList";

const App = ({handleScoreFor1, handleScoreFor2, resetit, winner } ) => (
    <React.Fragment>

        <Header />

        {/* scores */}
        <div className="row mb-4">
          <ScoreCard1 
            handleScore = { handleScoreFor1 }
          /> 
          <ScoreCard2 
            handleScore = { handleScoreFor2 }
          />
        </div>

        <WinAlert winner= { winner } />
        <hr />

        <button 
          onClick={ resetit }
          className="btn btn-danger mb-2"
        >Reset</button>
        <HistoryList />
    </React.Fragment>
);

export default App;