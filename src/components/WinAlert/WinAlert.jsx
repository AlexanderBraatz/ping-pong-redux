import React from "react";
const WinAlert = ({winner, name1, name2}) =>(

    winner === 0 ? null: 
        <h2 className="alert alert-success">{winner>1 ? name2: name1} wins!</h2>  
      
);
export default WinAlert;