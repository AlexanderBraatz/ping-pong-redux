import React from "react"; 
import Header from "./Header";
import ScoreCard1 from "./ScoreCard/ScoreCard1";
import ScoreCard2 from "./ScoreCard/ScoreCard2";
import WinAlert from "./WinAlert";
import HistoryList from "./HistoryList";
import ResetButton from "./ResetButton";

const App = ( props ) => (
    <React.Fragment>
      <Header />
      <div className="row mb-4">
        <ScoreCard1 /> 
        <ScoreCard2 />
      </div>
      <WinAlert/>
      <hr />
      <ResetButton />
      <HistoryList />
    </React.Fragment>
);

export default App;