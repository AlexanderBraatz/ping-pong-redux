import React from "react";
const HistoryList = ({history, name1, name2}) =>(
    <>
        <div className="card bg-dark mt-2 mb-2">
            <div className="bg-dark text-white text-center">Results</div>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Game</th>
                    <th scope="col">{name1}</th>
                    <th scope="col">{name2}</th>
                    <th scope="col">Winner</th>
                    </tr>
                </thead>
                <tbody>
                    { history===[] ? null :  
                        history.map((game, i)=>(
                                <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{game.player_1.score}</td>
                                <td>{game.player_2.score}</td>
                                <td>{game.player_1.won ? name1 : name2 }</td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>
        </div>
     
    </>
);
 
// unique key?
// key={(i+1)*11}
// key={(i+1)*13}
// key={(i+1)*17}
// key={(i+1)*19}
// key={(i+1)*23}
export default HistoryList;