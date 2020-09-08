import React from "react";

const App = ({score1, score2, handleScoreFor1, handleScoreFor2, reset, servingP1 } ) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={`card text-center ${servingP1 ?"bg-dark text-white": ""}`}>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ score1 }</p>
                    </div>
                    <div className="card-footer">
                        <button 
                          onClick={handleScoreFor1}
                          className="form-control btn btn-success"
                        >+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={`card text-center ${!servingP1 ?"bg-dark text-white": ""}`}>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ score2 }</p>
                    </div>
                    <div className="card-footer">
                        <button
                          onClick={handleScoreFor2}
                          className="form-control btn btn-success"
                        >+</button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

        <hr />

        { /* reset button */}
        <button 
          onClick={ reset }
          className="btn btn-danger"
        >Reset</button>
    </React.Fragment>
);

export default App;