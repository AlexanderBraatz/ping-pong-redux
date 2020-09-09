import React from "react";
const ScoreCard = ({player, serving, score, handleScore, winner}) =>(

    <div className="col-md-6 mt-4">
    <div className={`card text-center ${serving ?"bg-dark text-white": ""}`}>
        <h5 className="card-header">Player {player }</h5>
        <div className="card-body">
            <p className="card-text display-1">{ score }</p>
        </div>
        <div className="card-footer">
            <button 
              onClick={ handleScore }
              className={`form-control btn btn-success ${ winner>0 ? `disabled`: `` }`}
              disabled = { winner>0 }
            >+</button>
        </div>
    </div>
</div>
);
export default ScoreCard;