import React from "react";
const WinAlert = ({winner}) =>(

    winner === 0 ? null: 
        <h2 className="alert alert-success">Player {winner>1 ? "2": "1"} wins!</h2>  
      
);
export default WinAlert;